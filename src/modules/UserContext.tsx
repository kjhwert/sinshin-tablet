import React, {createContext, useState} from 'react';

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{loading}}>{children}</UserContext.Provider>
  );
};

export default UserContext;
