import React, { useState } from 'react';

export const Search = () => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className='search_form'>
      <input
        type='text'
        name='search'
        id='search'
        onChange={(e) =>
          setSearch(e.target.value.toLocaleLowerCase().replace(/ /g, ''))
        }
        value={search}
      />

      <div className='search_icon' style={{ opacity: search ? 0 : 0.3 }}>
        <span className='material-icons'>search</span>
        <span>Search</span>
      </div>

      {/* <div className='close_search'>&times;</div> */}
    </form>
  );
};
