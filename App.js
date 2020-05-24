/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import 'react-native-gesture-handler';
import LoginModal from './components/LoginModal';
import SetUp from './components/SetUp';
import Details from './components/Details';
import {Provider} from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {View, Text} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginModal} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SetUp" component={SetUp} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;