import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';


import { getNotification } from '../../store/selectors/selectors';

class Notification extends Component
{

    state = {
      isVisible: false
    };

    constructor(props){
      super(props);
    }

    componentWillUpdate() {
      // if(this.props.notification.type !== undefined){
      //   this.setState({isVisible:true},
      //       ()=>{
      //         // this.changeState();
      //       });
      // }
    }

    render () {
      return this.renderContent();

    }

    renderContent () {
      const { type , message } = this.props.notification;
      const defaultClass = 'notification';
      const linkClass = type === `error` ? `${defaultClass}  error` : `${defaultClass} success`;


      if(this.state.isVisible){
        return (
            <div className = {linkClass}>
              <p>
                {message}
              </p>
            </div>
        )
      }

      return null;
    }


    changeState (time) {
      const t = time ? time : 4000;

      setTimeout(()=>{
        this.setState({
          isVisible:false
        }, ()=>{console.log('state changes')});
      }, t);
    }


}


const mapStateToProps = state => ({
  notification: getNotification(state)
});

export default connect(mapStateToProps, null)(Notification);