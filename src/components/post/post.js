import React, { Component } from 'react';
import styles from './post.css';

export default class Post extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    pic: React.PropTypes.string,
  };

  render() {
    let postImg;
    if (this.props.pic) {
      postImg = <img src={this.props.pic} className={styles.img} />;
    } else {
      postImg = <div className={styles.empty}></div>;
    }
    return (
      <div className={styles.post}>
        <div className={styles.thumb}>
          {postImg}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.desc}>{this.props.desc}</div>
        </div>
      </div>
    );
  }
}
