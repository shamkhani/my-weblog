import React, { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
  <header className="mb-14 flex flex-row place-content-between">
        <a className="__className_b47211 inline-block text-2xl font-black  scale-100 active:scale-100"
          href="/">
            <span className='headerTitle' >
              overreacted</span>
              </a>
              <span className="relative top-[4px] italic"> 
              <ThemeToggle /></span></header>
   
      <main>{children}</main>
    </>
  );
};

export default Layout;
