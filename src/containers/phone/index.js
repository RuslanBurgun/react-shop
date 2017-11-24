import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { fetchPhoneById } from '../../actions';
import { getPhoneById } from "../../selectors";

class Phone extends Component
{

  componentDidMount () {
    // get id in route
    const id = this.props.match.params.id;
    this.props.fetchPhoneById(id);
  }

  renderFields () {

    const { phone } = this.props;
    const columnFields = R.compose(
        R.toPairs,
        R.pick([
            'cpu',
            'camera',
            'size',
            'weight',
            'display',
            'battery',
            'memory'
        ])
    )(phone);

    return columnFields.map(([key, value]) => (
        <div className="column" key={key}>
          <div className="ab-detail-title">
            <p>{key}</p>
          </div>
          <div className="ab-detail-info">
            <p>{value}</p>
          </div>
        </div>
    ))
  }


  renderContent () {
    const { phone } = this.props;

    return (
        <div className="thumbnail">
          <div className="row">
            <div className="col-md-6">
              <img src={phone.image}
                   className="img-thumbnail"
                   alt={phone.name}/>
            </div>
            <div className="col-md-6">
              {this.renderFields()}
            </div>
          </div>
          <div className="caption-full">
            <h4 className="pull-right">${phone.price}</h4>
            <h4 className="pull-right">${phone.name}</h4>
            <p>{phone.description}</p>
          </div>
        </div>
    )
  }

  renderSideBar () {
    return (
        <div>SideBar</div>
    )
  }

  render () {
    const  { phone } = this.props;
    return(
        <div className="vuew-container">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                {phone && this.renderContent()}
              </div>
              <div className="col-md-3">
                {phone && this.renderSideBar()}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  phone: getPhoneById(state, state.phonePage.id)
});

const mapDispatchToProps = {
  fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps) (Phone);