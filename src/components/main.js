import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { Field, Form, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap';
import { createKiosk } from '../actions/index';

class Main extends Component {


  handleSubmit(val) {
    console.log("HANDLESUBMIT", val);
    return createKiosk(val);
  }

  render() {
    const { mall, city, state, zip, batteriesOnLoan, batteriesToReplace, batteryCount } = this.props;
    return (
      <div className="kioskCreation"> 
      <Form model="user" onSubmit={val => this.handleSubmit(val)}>
        <Field model="user.kioskId">
          <input type="text" placeholder="kioskId" />
        </Field>
        <Field model="user.mall">
          <input type="text" placeholder="mall" />
        </Field>
        <Field model="user.city">
          <input type="text" placeholder="city" />
        </Field>
        <Field model="user.state">
          <input type="text" placeholder="state" />
        </Field>
        <Field model="user.zip">
          <input type="text" placeholder="Zip" />
        </Field>
        <Field model="user.batteriesOnLoan">
          <input type="text" placeholder="batteriesOnLoan" />
        </Field>
        <Field model="user.batteriesToReplace">
          <input type="text" placeholder="batteriesToReplace" />
        </Field>
        <Field model="user.batteryCount">
          <input type="text" placeholder="batteryCount" />
        </Field>
        <Button bsStyle="info" type="submit">Create New Kiosk Entry</Button>
      </Form>
      </div> 
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state)
  return {
    id: state.id,
    kioskId: state.kioskId,
    mall: state.mall,
    city: state.city,
    zip: state.zip,
    batteriesOnLoan: state.batteriesOnLoan,
    batteriesToReplace: state.batteriesToReplace,
    batteryCount: state.batteryCount,
    isLoggedin: state.payload,
  };
}

export default connect(mapStateToProps, { createKiosk })(Main);
