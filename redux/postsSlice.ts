import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../types';

interface PostsState {
  posts: Post[];
  singlePost: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  singlePost: null,
  loading: false,
  error: null,
};

function addDays(date: Date, days: number): Date {
  let result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}
// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  let posts = response.data.map((post: any) => ({
    ...post,
    date:addDays(new Date(),post.id).toDateString(),
  })) as Post[];  
  return posts.sort((a: Post, b: Post) => {
    return   +new Date(b.date) - +new Date(a.date);
  });

});
export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id: string) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    userId: response.data.userId,
    id: response.data.id,
    title: response.data.title,
    body: response.data.body,
    date:addDays(new Date(),response.data.id).toDateString(),
  }
});

// Slice definition
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load posts';
      })
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePost = action.payload; 
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch post';
      });
  },
});

export default postsSlice.reducer;
