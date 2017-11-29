import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ToastContainer, toast} from 'react-toastify';


import {getNotification} from '../../store/selectors/selectors';
import {cleanNotification} from "../../store/actions/notification/index";


class Notification extends Component {

  state =
      {
        defaultOption: {
          hideProgressBar: true,
          position: toast.POSITION.TOP_LEFT,

        }
      };


  isNotificationActive() {
    return !!this.props.notification.type;
  }


  componentDidUpdate() {

    this.notify();
  }



  render() {

    return this.renderContent();
  }

  switchType = (type) => {

    switch (type) {
      case 'error':
        return 'error';
      default:
        return 'info';
    }

  };


  notify = () => {
    if (this.isNotificationActive()) {
      const type = this.switchType(this.props.notification.type);
      const {message} = this.props.notification;

       toast[type](message, this.state.defaultOption);


       // this.props.cleanNotification();

    }
  };


  renderContent() {
    if (this.isNotificationActive()) {
      return (<ToastContainer/>);
    }
    return null;
  }

}


const mapStateToProps = state => ({
  notification: getNotification(state)
});

const mapDispatchToProps = {
  cleanNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);