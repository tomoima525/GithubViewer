/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  ListView,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'GithubViewer',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>My followers</Text>
        <FollowerList />
      </View>

      // <Button
      //   title="Go to Jane's profile"
      //   onPress={() =>
      //     navigate('Profile', { user: 'Jane' })
      //   }
      // />
    );
  }
}

class FollowerList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.user}`,
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
    <View>
      <Text>{params.user}'s repository</Text>
    </View>
    );
  }
}

const GithubViewer = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubViewer', () => GithubViewer);
