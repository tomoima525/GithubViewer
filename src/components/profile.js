import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import axios from 'axios';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.data.login}`,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    axios.get(`https://api.github.com/users/${params.data.login}/repos`)
    .then(response => {
      const arr = response.data;
      this.setState({dataSource : this.state.dataSource.cloneWithRows(arr)});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
    <View style={styles.container}>
      <Image source={{uri: params.data.avatar_url}}
       style={styles.avater}/>
      <Text style={styles.title}>{params.data.login}'s Github</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <Description obj={data} /> }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        enableEmptySections={true}
      />
    </View>
    );
  }
}

const Description = (props) => {
  return (
    <View>
      <Text style= {styles.repos_title}>{props.obj.name}</Text>
      <Text style= {styles.repos_desc}>{props.obj.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F6F6F6',
    padding : 16
  },
  avater: {
    width : 50,
    height : 50,
    alignSelf : 'center',
    borderRadius: 25
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 10
  },
  repos_title: {
    fontSize: 16,
    padding: 8,
    backgroundColor: '#F6F6F6'
  },
  repos_desc: {
    paddingLeft: 16,
    paddingBottom: 8,
    backgroundColor: '#F6F6F6'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default ProfileScreen;
