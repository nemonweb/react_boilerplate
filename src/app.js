import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/post-list';
require('./style.css');

ReactDOM.render(
  <PostList />,
  document.getElementById('content')
);
