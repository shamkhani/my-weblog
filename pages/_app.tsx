
import { Provider } from 'react-redux';
import  store from '../redux/store';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import '../styles/global.css'; 
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = 'mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]';
  });
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
