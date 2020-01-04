import React from 'react';
import Login from '../login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Login />
    );
  }
}