import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
// import RegistrationForm from './registrationForm';
import { submitUserInfo } from '../actions/index';
import { Field, Form, actions } from 'react-redux-form';

class Main extends Component {


  handleSubmit(val) {
    console.log(val)
    // dispatch(actions.submit('user', submitUserInfo(val)))
  }

  render() {
    let { first_name, last_name, password, zip } = this.props
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <Field model="user.first_name">
          <input type="text" placeholder="First Name"/>
        </Field>
        <Field model="user.last_name">
          <input type="text" placeholder="Last Name"/>
        </Field>
        <Field model="user.password">
          <input type="text" placeholder="Password"/>
        </Field>
        <Field model="user.email">
          <input type="text" placeholder="E-mail"/>
        </Field>
        <Field model="user.zip">
          <input type="text" placeholder="Zip"/>
        </Field>
        <button>Submit!</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    first_name: state.first_name, 
    last_name: state.last_name, 
    password: state.password, 
    zip: state.zip,
    isLoggedin: state.payload,
  };
}

export default connect(mapStateToProps, { submitUserInfo })(Main);


