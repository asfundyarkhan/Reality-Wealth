import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/utility/AuthContext';
import Stacks from './src';
import {SafeAreaView} from 'react-native';
import styles from './src/Screens/IntroScreen/styles';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
