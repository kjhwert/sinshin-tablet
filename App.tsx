import React from 'react';
import LoginStack from './src/navigation/LoginStack';
import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from './src/modules/UserContext';
import {DropDownContextProvider} from './src/modules/DropDownContext';

const App = () => {
  return (
    <DropDownContextProvider>
      <UserContextProvider>
        <NavigationContainer>
          <LoginStack />
        </NavigationContainer>
      </UserContextProvider>
    </DropDownContextProvider>
  );
};

export default App;
