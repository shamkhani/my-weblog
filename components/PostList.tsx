
import React, { ReactNode } from 'react';
import { Post } from '../types'; 
import PostItem from './PostItem';

const PostList: React.FC<{ posts: Post[], error: string | null, loading:boolean }> = ({ posts, error, loading }) => {
  return (
    <>
       {loading ? (
        <span>loading</span>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='relative -top-[10px] flex flex-col gap-8'>
          {posts.map((post) => (
             <PostItem post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
