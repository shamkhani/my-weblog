import { useRouter } from 'next/router';
import { Container, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../../redux/postsSlice';
import { RootState, AppDispatch } from '../../redux/store';  
import PostItem from '../../components/PostItem';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<AppDispatch>();
  const post = useSelector((state: RootState) => state.posts.singlePost);

  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id as string));
    }
  }, [dispatch, id]);

  if (!post) {
    return <p>Post not found</p>;
  }
 
  return (
    <>
    <Container>
       {loading ? (
        <p className=' bg-[--bg]'>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <a className='block py-4 hover:scale-[1.005] scale-100 active:scale-100'
        onClick={() =>router.push(`/post/${encodeURIComponent(post.id)}`)
      } >
      <article>
          <h1 className='__className_b47211 text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]'>{post.title}</h1>
          <small className='text-[13px] text-gray-700 dark:text-gray-300'>{post.date}</small>
          <p className='markdown mt-10'>{post.body}</p>
      </article>
      </a>
       )}
    </Container>
    </>
  );
};

export default PostPage;

