import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Required TextInput with error */
export default function ExampleTextInputCSSModulesError() {
    return (
        <TextInputCSSModules 
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    );
}
