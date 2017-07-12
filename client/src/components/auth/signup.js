import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signupUser } from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps, this.props.history);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>
          {this.props.errorMessage}
        </div>
      );
    }
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
        {this.renderAlert()}
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

const mapStateToProps = state => ({ errorMessage: state.auth.error });

export default connect(mapStateToProps, { signupUser })(
  reduxForm({ form: 'signup', validate })(Signup)
);
