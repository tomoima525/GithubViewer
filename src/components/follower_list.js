
import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

//import githubApi from '../epics/githubApi';

class FollowerList extends Component {
  static navigationOptions = {
    title: 'GithubViewer',
  };
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/user/followers')
    .then(response => {
      const arr = response.data;
      this.setState({dataSource : this.state.dataSource.cloneWithRows(arr)});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My followers</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row obj={data} onPress={() => navigate("Profile", {data: data})}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }
}

const Row = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style= {styles.follower}>{props.obj.login}</Text>
    </TouchableHighlight>
  );
}

const highlightRow = (sectionID, rowID) => {null}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  follower: {
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default FollowerList;
