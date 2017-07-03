import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** Example registration form */
export default class ExampleRegistrationForm extends React.Component {
    onSubmit = (user) => {
        console.log(user);
    }

    render() {
        return (
            <div>
                <RegistrationForm onSubmit={this.onSubmit} />
                <hr />
            </div>
        );
    }
}
