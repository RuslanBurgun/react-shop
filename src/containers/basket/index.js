import React from 'react';
import {connect} from 'react-redux';

import * as R from 'ramda';

import {getTotalBasketPrice, getBasketPhonesWithCount} from "../../selectors";



const Basket = ({phones, totalPrice}) => {

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
                                <span className="delete-cart"/>
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
            SideBar
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

export default connect(mapStateToProps, null)(Basket);