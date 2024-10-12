import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
  },
});

// Define RootState based on the store's state
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
