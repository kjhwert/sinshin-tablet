import React from 'react';
import LoginStack from './src/navigation/LoginStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default App;
