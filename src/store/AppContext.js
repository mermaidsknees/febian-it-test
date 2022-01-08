import React, { useState } from 'react';
import { db } from '../firebase';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const [store, setStore] = useState({
    users: [],
  });

  const [actions, setActions] = useState({
    getUsers: () => {
      db.ref('/users').on('value', function (snapshot) {
        setStore({ ...store, users: snapshot.val() });
      });
    },
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
