import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle'>
        <Link to='/'>
          <h1 className='navbar-brand text-uppercase p-0 m-0 '>
            Note3SixtyMedia
          </h1>
        </Link>

        <Menu />
      </nav>
    </>
  );
};
