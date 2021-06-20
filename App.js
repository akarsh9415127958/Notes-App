import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Onboarding';
import AppNavigator from './navigator'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
export default class App extends React.Component{
 render(){
  return (
  
    <AppContainer/>
  );
}
}
const appNavigator = createSwitchNavigator({
 
  Onboarding:{screen:Onboarding},
    AppNavigator:{screen: AppNavigator}
  })
  const AppContainer =  createAppContainer(appNavigator);

