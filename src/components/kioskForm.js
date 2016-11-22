import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link, browserHistory } from 'react-router';
import { Field, Form, actions } from 'react-redux-form';
import { Button } from 'react-bootstrap';
import { createKiosk } from '../actions/index';

export default class KisokForm extends Component {


  handleSubmit(val) {
    console.log('HANDLESUBMIT', val);
    return createKiosk(val);
  }

  render() {
    // const { mall, city, state, zip, batteriesOnLoan, batteriesToReplace, batteryCount } = this.props;
    return (
      <div className="kioskCreation"> 
        <Form model="user" onSubmit={val => this.handleSubmit(val)}>
          <Field model="user.kiosk_id">
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
          <Field model="user.batteries_on_loan">
            <input type="text" placeholder="batteriesOnLoan" />
          </Field>
          <Field model="user.batteries_to_replace">
            <input type="text" placeholder="batteriesToReplace" />
          </Field>
          <Field model="user.battery_count">
            <input type="text" placeholder="batteryCount" />
          </Field>
          <Button bsStyle="info" type="submit">Submit</Button>
        </Form>
      </div> 
    );
  }
}
