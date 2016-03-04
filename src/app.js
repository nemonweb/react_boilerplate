import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
}

setInterval(function () {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('content')
  );
}, 500);
