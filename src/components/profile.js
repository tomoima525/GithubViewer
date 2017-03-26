import React, { Component } from 'react';


class ProfileScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.name}`,
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
    <View>
      <Text>{params}'s repository</Text>
    </View>
    );
  }
}

export default ProfileScreen;
