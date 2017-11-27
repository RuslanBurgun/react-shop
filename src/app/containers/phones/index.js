import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';


import { fetchPhones, loadMorePhones} from '../../store/actions/phone';
import { fetchCategories } from '../../store/actions/category';
import { addPhoneToBasket } from '../../store/actions/basket';
import {getPhones} from '../../store/selectors/selectors';
import { Link } from 'react-router-dom';

class Phones extends Component
{

  componentDidMount () {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }

  renderPhone (phone, index) {
    const { addPhoneToBasket } = this.props;
    const shortDescription = `${R.take(60, phone.description)}...`;
    return (
        <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}> 
          <div className="thumbnail">
            <img src={phone.image} alt={phone.image} className="img-thumbnail" />
            <div className="caption">
              <h4 className="pull-right">
                ${phone.price}
              </h4>
              <h4 className="pull-left">
                <Link to={`/phones/${phone.id}`} >{phone.name}</Link>
              </h4>
              <p>{shortDescription}</p>
              <p>
                <button
                    className="btn btn-primary"
                    onClick={()=>addPhoneToBasket(phone.id)}
                >By now</button>
                <Link className = "btn btn-default" to={`/phones/${phone.id}`} >More info</Link>
              </p>
            </div>
          </div>
        </div>
    )
  }

  render () {
    const { phones, loadMorePhones } = this.props;

    return (
        <div>
          <div className="books row">
            {phones.map((phone, index)=>this.renderPhone(phone, index))}
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary pull-right" onClick={loadMorePhones}>
                loadMore
              </button>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);