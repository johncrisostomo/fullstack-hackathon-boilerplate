import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signinUser } from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password }, this.props.history);
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            id="email"
            type="email"
            className="form-control"
            component="input"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            id="password"
            type="password"
            className="form-control"
            component="input"
          />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.error });

export default connect(mapStateToProps, { signinUser })(
  reduxForm({ form: 'signin' })(SignIn),
);
