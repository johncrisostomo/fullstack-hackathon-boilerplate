import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signupUser } from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    console.log(email, password, passwordConfirm);
  }

  renderForm({ input, label, type, className, meta: { touched, error } }) {
    console.log(error);
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} type={type} className={className} />
          {touched &&
            error &&
            <div className="error">
              {error}
            </div>}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field
            label="Email:"
            name="email"
            className="form-control"
            type="email"
            component={this.renderForm}
          />
        </fieldset>

        <fieldset className="form-group">
          <Field
            label="Password:"
            name="password"
            className="form-control"
            type="password"
            component={this.renderForm}
          />
        </fieldset>

        <fieldset className="form-group">
          <Field
            label="Confirm Password:"
            name="passwordConfirm"
            className="form-control"
            type="password"
            component={this.renderForm}
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
