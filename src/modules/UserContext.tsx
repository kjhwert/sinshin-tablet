import React, {createContext, useEffect, useState} from 'react';
import {IUser} from '../components/types/user';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({});

type Nullable<IUser> = IUser | null;

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState<Nullable<IUser>>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const saveUser = async (data: IUser) => {
    await AsyncStorage.setItem('@user', JSON.stringify(data));
    setUser(data);
  };

  const userLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setUser(null);
  };

  const getUser = async () => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return;
    }
    const result = await AsyncStorage.getItem('@user');
    if (result) {
      setUser(JSON.parse(result));
    } else {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{saveUser, user, loading, getUser, userLogout}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
