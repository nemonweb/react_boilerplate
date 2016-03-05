import React, { Component } from 'react';
import styles from './post.css';

export default class Post extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.post}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.desc}>{this.props.desc}</div>
      </div>
    );
  }
}
