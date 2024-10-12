import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { RootState, AppDispatch } from '../redux/store';  
import PostList from '../components/PostList';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();  
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <PostList posts={posts}  error={error} loading={loading}/>
    </div>
  );
}
