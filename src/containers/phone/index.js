import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { fetchPhoneById } from '../../actions';

class Phone extends Component
{

  componentDidMount () {
    // get id in route
    const id = this.props.match.params.id;
    this.props.fetchPhoneById(id);
  }


  render () {
    return(
        <div>Phone</div>
    );
  }
}

const mapDispatchToProps = {
  fetchPhoneById
};

export default connect(null, mapDispatchToProps) (Phone);