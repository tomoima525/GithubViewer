import axios from 'axios';

class GithubApi {
  getFollowers() {
    axios.get('/user/followers')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  getUser(userName) {
    axios.get('/users', {params : {username : userName}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}
