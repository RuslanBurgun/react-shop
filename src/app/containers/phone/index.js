import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as R from 'ramda';

import { fetchPhoneById } from '../../store/actions/phone';
import { addPhoneToBasket } from '../../store/actions/basket';
import { getPhoneById } from "../../store/selectors/selectors";

import   BasketCart  from '../../components/basketCart';


class Phone extends Component
{

  componentDidMount () {
    // get id in route
    const id = this.props.match.params.id;
    this.props.fetchPhoneById(id);
  }

  renderFields= () => {

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
  };


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
    const { phone, addPhoneToBasket } = this.props;
    return (
        <div>
          <p className="lead">
            Quick shop
          </p>
          <BasketCart/>
          <div className="form-group">
            <h1>{phone.name}</h1>
            <h1>${phone.price}</h1>
            <Link to="/" className="btn btn-info btn-block">
              Back to store
            </Link>
            <button
                type="button"
                className="btn btn-success btn-block"
                onClick={() => addPhoneToBasket(phone.id)}
            >
            Add to cart
            </button>
          </div>
        </div>
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
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps) (Phone);