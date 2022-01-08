/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useContext } from 'react';
import { AppContext } from '../store/AppContext';
import { jsx, css } from '@emotion/react';

const searchResults = css`
  display: flex;
  justify-content: center;
`;

function SearchResults({ searchTerm }) {
  const { store, actions } = useContext(AppContext);
  const { users } = store;

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <div>
      {users
        .filter((val) => {
          if (!searchTerm) {
            return val;
          } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        .map((item, index) => (
          <div css={searchResults} key={index}>
            <h3>{item}</h3>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
