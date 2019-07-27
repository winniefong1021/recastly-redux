import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import handleVideoSearch from './actions/search.js';

import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.render(
  <Provider store={store} >
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>,
  document.getElementById('app'),
  () => handleVideoSearch('dog')(store.dispatch)
);
