import React from 'react';
import { Post } from '../types'; 
import { useRouter } from 'next/router'

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter()

  return (
    <>
      <a className='block py-4 hover:scale-[1.005] scale-100 active:scale-100'
        onClick={() =>router.push(`/post/${encodeURIComponent(post.id)}`)
      } >
      <article>
          <h2 className='__className_b47211 text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]'>{post.title}</h2>
          <small className='text-[13px] text-gray-700 dark:text-gray-300'>{post.date}</small>
          <p className='mt-1'>{post.body}</p>
      </article>
      </a>
    </>
  );
};

export default PostItem;
