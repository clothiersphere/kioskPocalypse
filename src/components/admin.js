import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import KioskGroup from './kioskGroup';
import KioskSubmit from './kioskSubmitButton';
import { createKiosk, fetchKioskList } from '../actions/index';

class AdminPanel extends Component {

  componentWillMount() {
    this.props.fetchKioskList();
  }

  render() {
    return (
      <div className="mainInterface">
        <div className="tableArea"> 
          <KioskGroup
            kiosk={this.props.kioskList}
          />
        </div> 
        <div className="buttonArea">
          <KioskSubmit /> 
        </div> 
      </div>
    );
  }
}
  function mapStateToProps(state) {
    console.log("state", state)
    console.log("history", state.history.kioskList)
    return {
      id: state.history.id,
      kioskId: state.history.kiosk_id,
      mall: state.history.mall,
      city: state.history.city,
      zip: state.history.zip,
      batteries_on_loan: state.history.batteries_on_loan,
      batteries_to_replace: state.history.batteries_to_replace,
      battery_count: state.history.battery_count,
      isLoggedin: state.history.payload,
      kioskList: state.history.kioskList,
    };
  }

  export default connect(mapStateToProps, { createKiosk, fetchKioskList })(AdminPanel); 
