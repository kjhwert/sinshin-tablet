import React from 'react';
import LoginStack from './src/navigation/LoginStack';
import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from './src/modules/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
