import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupUser } from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    console.log(email, password, passwordConfirm);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email : </label>
          <Field
            name="email"
            className="form-control"
            type="email"
            component="input"
          />
        </fieldset>

        <fieldset className="form-group">
          <label>Password: </label>
          <Field
            name="password"
            className="form-control"
            type="password"
            component="input"
          />
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <Field
            name="passwordConfirm"
            className="form-control"
            type="password"
            component="input"
          />
        </fieldset>
        <button action="submit" className="btn btn-primary">
          Sign up!
        </button>
      </form>
    );
  }
}

const validate = formProps => {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};

export default reduxForm({ form: 'signup', validate })(Signup);
