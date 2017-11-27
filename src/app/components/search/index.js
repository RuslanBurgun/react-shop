import React, {Component } from 'react';
import { connect } from 'react-redux';

import { searchPhone } from '../../store/actions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = event => {
        this.setState({
            value:event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchPhone(this.state.value);
    };


    render () {
        return (
            <div>
                <div className="well-blosd">
                    <h3 className="lead">Quick shop</h3>
                    <div className="input-group">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                   onChange={this.handleChange}
                                   className="form-control"
                            />
                        </form>
                        <span className="input-group-btn">
                <button className="btn btn-default">
                  <span className="glyphicon glyphicon-search"/>
                </button>
              </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    searchPhone
};

export default connect(null, mapDispatchToProps) (Search);
