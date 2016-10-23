import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { Field, Form, actions } from 'react-redux-form';
import { submitUserInfo } from '../actions/index';


class Main extends Component {


  handleSubmit(val) {
    console.log(val);
    // dispatch(actions.submit('user', submitUserInfo(val)))
  }

  render() {
    const { mall, city, state, zip, batteriesInUse, batteriesToReplenish, batteriesInStock } = this.props;
    return (
      <Form model="user" onSubmit={val => this.handleSubmit(val)}>
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
        <Field model="user.batteriesInUse">
          <input type="text" placeholder="batteriesInUse" />
        </Field>
        <Field model="user.batteriesToReplenish">
          <input type="text" placeholder="batteriesToReplenish" />
        </Field>
        <Field model="user.batteriesInStock">
          <input type="text" placeholder="batteriesInStock" />
        </Field>
        <button>Create New Kiosk Entry</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.id,
    mall: state.mall,
    city: state.city,
    zip: state.zip,
    batteriesInUse: state.batteriesInUse,
    batteriesToReplenish: state.batteriesToReplenish,
    batteriesInStock: state.batteriesInStock,
    isLoggedin: state.payload,
  };
}

export default connect(mapStateToProps, { submitUserInfo })(Main);
