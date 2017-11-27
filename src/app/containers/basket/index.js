import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import * as R from 'ramda';

import {getTotalBasketPrice, getBasketPhonesWithCount} from "../../selectors/selectors";

import {removePhoneFromBasket, basketCheckout, cleanBasket } from '../../actions';



const Basket = ({phones, totalPrice, removePhoneFromBasket, basketCheckout, cleanBasket}) => {

    const isBasketEmpty = () => R.isEmpty(phones);

    const renderContent = () => (
        <div>
            {isBasketEmpty() && <div> Your shopping cart is empty</div>}

            <div className="table-responsive">
                <table className="table-bordered table-stripes table-condensed cf">
                    <tbody>
                    {phones.map((phone, index) => (
                        <tr key={index}
                            className='item-checout'
                        >
                            <td className="first-column-checkout">
                                <img src={phone.image} className="img-thumbnail" alt={phone.name}/>
                            </td>
                            <td>{phone.name}</td>
                            <td>${phone.price}</td>
                            <td>{phone.count}</td>
                            <td>
                                <span className="delete-cart"
                                onClick={()=> removePhoneFromBasket(phone.id)}
                                />
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                R.not(isBasketEmpty()) && (
                    <div className="row">
                        <div className="pull-right total-user-checkout">
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>)
            }
        </div>
    );


    const renderSideBar = () => (
        <div>
            <Link
                to="/"
                className="btn btn-info"
            >
                <span className="glyphicon glyphicon-info-sign"/>
                <span>Continue</span>
            </Link>
            {
                R.not(isBasketEmpty()) &&
                <div>
                    <button
                        onClick={cleanBasket}
                        className="btn btn-danger"
                    >
                        <span className="glyphicon glyphicon-trash">
                            clear card
                        </span>
                    </button>
                    <button className="btn btn-success" onClick={() => basketCheckout(phones)}>
                        <span className="glyphicon glyphicon-envelope">
                            Checkout
                        </span>
                    </button>
                </div>
            }
        </div>
    );


    return (
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3 btn-user-checkout">
                        {renderSideBar()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);