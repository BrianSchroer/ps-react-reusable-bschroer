import React from 'react';
import PasswordInput from 'ps-react/PasswordInput';

/** All features enabled */
class ExamplePasswordInputAllFeatures extends React.Component {
    state = {
        password: ''
    }

    getQuality(password) {
        const length = password.length;
        return (length > 10) ? 100 : length * 10;
    }

    render() {
        const {password} = this.state;
        return (
            <div>
                <PasswordInput
                    htmlId="password-input-example-all-features"
                    name="password"
                    onChange={(event)=> this.setState({password: event.target.value})}
                    value={password}
                    minLength={8}
                    placeholder="Enter password"
                    showVisibilityToggle
                    quality={this.getQuality(password)}
                    {...this.props}
                />
            </div>
        );
    }
}

export default ExamplePasswordInputAllFeatures;
