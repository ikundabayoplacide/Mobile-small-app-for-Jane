import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screen/Register';
import Home from'./Screen/Home';
import Message from './Screen/Message';
import Chat from './Screen/Chat';
import Login from './Screen/Login';
import Image from './Screen/Image';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="Home"component={Home}/>
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="Messages" component={Message}/>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Chat" component={Chat}/>
    <Stack.Screen name='Images' component={Image}/>
   </Stack.Navigator>
  </NavigationContainer>
  );
}

