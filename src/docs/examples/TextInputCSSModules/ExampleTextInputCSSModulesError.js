import React from 'react';
import TextInputCSSModules from '../../../components/TextInputCSSModules';

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
