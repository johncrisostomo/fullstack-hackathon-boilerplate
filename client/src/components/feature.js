import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions';

class Feature extends Component {
  componentDidMount() {
    this.props.fetchMessage();
  }

  render() {
    return <div>This is a feature</div>;
  }
}

export default connect(null, { fetchMessage })(Feature);
