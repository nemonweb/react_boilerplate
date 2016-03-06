import React, { Component } from 'react';
import Post from '../post/post';
import styles from './postList.css';

export default class PostList extends Component {
  render() {
    return (
      <div className={styles.postList}>
        <Post
          title="test"
          desc="desc"
          pic="http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/03/Screen-Shot-2016-03-03-at-1.33.48-PM.png"
        />
        <Post
          title="test"
          desc="desc"
        />
      </div>
    );
  }
}
