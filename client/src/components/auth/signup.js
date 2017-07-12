import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupUser } from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    console.log(email, password, passwordConfirm);
  }

  renderForm({ input, label, type, className, meta: { touched, error } }) {
    return (
      <fieldset className="form-group">
        <label>
          {label}
        </label>
        <input {...input} type={type} className={className} />
        {touched &&
          error &&
          <div className="error">
            {error}
          </div>}
      </fieldset>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          label="Email:"
          name="email"
          className="form-control"
          type="email"
          component={this.renderForm}
        />

        <Field
          label="Password:"
          name="password"
          className="form-control"
          type="password"
          component={this.renderForm}
        />

        <Field
          label="Confirm Password:"
          name="passwordConfirm"
          className="form-control"
          type="password"
          component={this.renderForm}
        />
        <button action="submit" className="btn btn-primary">
          Sign up!
        </button>
      </form>
    );
  }
}

const validate = formProps => {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords do not match';
  }

  return errors;
};

export default reduxForm({ form: 'signup', validate })(Signup);
