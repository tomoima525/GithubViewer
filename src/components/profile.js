import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.data.login}`,
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
    <View>
      <Text>{params.data.login}'s repository</Text>
    </View>
    );
  }
}

export default ProfileScreen;
