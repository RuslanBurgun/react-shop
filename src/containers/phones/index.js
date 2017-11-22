import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';


import { fetchPhones } from '../../actions';
import {getPhones} from '../../selectors';
import { Link } from 'react-router-dom';
class Phones extends Component
{

  componentDidMount () {
    this.props.fetchPhones();
  }

  renderPhone (phone, index) {
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
                <button className="btn btn-primary">By now</button>
                <Link className = "btn btn-default" to={`/phones/${phone.id}`} >More info</Link>
              </p>
            </div>
          </div>
        </div>
    )
  }

  render () {
    const { phones } = this.props;
    return (
        <div>
          <div className="books row">
            {phones.map((phone, index)=>this.renderPhone(phone, index))}
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
});

const mapDispatchToProps = {
  fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);