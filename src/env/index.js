import { Platform } from 'react-native';

import axios from 'axios';

const init = (props) => {
  axios.defaults.baseUrl = 'https://api.github.com';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';
  axios.defaults.headers.common.Authorization = 'token xxxxxx';
  axios.defaults.headers.common['User-Agent'] = 'GithubViewer';
};

export default {init};
