import React from 'react';

export default class Post extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="post">
        <div className="post__title">{this.props.title}</div>
        <div className="post__desc">{this.props.desc}</div>
      </div>
    );
  }
}
