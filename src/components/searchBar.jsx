import React, { createRef, memo } from 'react';

const SearchBar = memo((props) => {
  const formRef = createRef();
  const inputRef = createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const searchContent = inputRef.current.value;
    props.onSearch(searchContent);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input type="text" ref={inputRef} />
      <button>검색</button>
    </form>
  );
});

export default SearchBar;
