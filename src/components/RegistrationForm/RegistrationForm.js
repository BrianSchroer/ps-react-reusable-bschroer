import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        errors: {},
        submitted: false
    };

    onChange = (event) => {
        const user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    passwordQuality(password) {
        const minPasswordLength = this.props.minPasswordLength;

        if (!password) {
            return null;
        }

        if (password.length > minPasswordLength) {
            return 100;
        }

        return parseInt(password.length/minPasswordLength * 100, 10);
    }

    validate({email, password}) {
        const errors = {};
        const {minPasswordLength} = this.props;

        if (!email) {
            errors.email = 'Email required.';
        }

        if (password.length < minPasswordLength) {
            errors.password = `Password must be at least ${minPasswordLength} characters.`;
        }

        this.setState({errors});

        return (Object.getOwnPropertyNames(errors).length === 0);
    }

    onSubmit = () => {
        const {user} = this.state;

        if (this.validate(user)) {
            this.props.onSubmit(user);
            this.setState({submitted: true});
        }
    }

    render() {
        const {user, errors, submitted} = this.state;
        const {email, password} = user;

        return (
            (submitted)
            ?
                <h2>{this.props.confirmationMessage}</h2>
            :
                <div>
                    <TextInput
                        htmlId="registration-form-email"
                        name="email"
                        onChange={this.onChange}
                        label="Email"
                        value={email}
                        error={errors.email}
                        required
                    />
                    
                    <PasswordInput
                        htmlId="registration-form-password"
                        name="password"
                        onChange={this.onChange}
                        label="Password"
                        value={password}
                        error={errors.password}
                        required
                        quality={this.passwordQuality(password)}
                        showVisibilityToggle
                        maxLength={50}
                    />                

                    <input type="submit" value="Register" onClick={this.onSubmit} />
                </div>
        );
    }
}

RegistrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
}

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};

export default RegistrationForm;
