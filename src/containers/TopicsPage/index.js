import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTopics} from '../actions/topics';
import {getQuotesArray} from '../reducers/index';
import QuoteListComponent from '../components/QuoteList';

class QuoteListContainer extends Component {
  render(){
    const {topics} = this.props
    return(
      <div>topicslist</div>
    )
  }
}

export default connect(
  (state) => ({ topics: getQuotesArray(state) }),
  { fetchTopics }
)(QuoteListContainer);
