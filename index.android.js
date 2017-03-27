/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import env from './src/env';
import FollowerList from './src/components/follower_list';
import ProfileScreen from './src/components/profile';

class GithubViewer extends Component {
 constructor(props) {
   super(props);
   env.init(props);
 }

 render() {
   return (
     <AppNavigator ref={nav => {this.navigator = nav;}} />
   );
 }
}

const AppNavigator = StackNavigator({
  Home: { screen: FollowerList },
  Profile: {screen: ProfileScreen },
});

AppRegistry.registerComponent('GithubViewer', () => GithubViewer);
