import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'redux';

import * as R from 'ramda';
import  classNames  from 'classnames';

import {getCategories, getActiveCategoryId} from '../../selectors';

const Categories = (props) => {
    const categories = props.categories;
    const activeCategoryId = props.activeCategoryId;

    const renderCategory = (category, index) => {
        const getActiveState = R.propEq('id', activeCategoryId);
        const linkClass = classNames({
            'list-group-item':true,
            'active':getActiveState(category)
        });
        return (
            <Link
            to={`/categories/${category.id}`}
            className={linkClass}
            key={index}
            >
                {category.name}
            </Link>
        );
    };


    const renderAllCategory = () => {
        const linkClass = classNames({
            'list-group-item':true,
            'active':!activeCategoryId
        });

        return (
            <Link
            to="/"
            className={linkClass}
            >
                All
            </Link>
        );
    };

    return (
    <div className="well">
        <h4>Brand</h4>
        <div className="list-group">
            {renderAllCategory()}
            {categories.map((category, index) => renderCategory(category, index))}
        </div>
    </div>)

};

const mapStateToProps = (state, ownProps) => ({
    categories:getCategories(state, ownProps),
    activeCategoryId: getActiveCategoryId(ownProps)
});

// export default connect(mapStateToProps, null)(Categories);
export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories);