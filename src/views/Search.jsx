/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import SearchResults from '../components/SearchResults';

const container = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SearchBar = styled.input`
  width: 60%;
  margin: auto;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  margin-top: 20px;
  &:focus {
    border: 1px solid gray;
  }
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, []);

  useEffect(() => {
    setSearchParams({ search: searchTerm });
  }, [searchTerm]);

  return (
    <div css={container}>
      <SearchBar onChange={handleSearch} type="text" placeholder="Search" />
      <SearchResults searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
