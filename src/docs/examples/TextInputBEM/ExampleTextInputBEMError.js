import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextInput with error */
export default function ExampleTextInputBEMErrror() {
    return (
        <TextInputBEM 
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    );
}
