import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextInput with error */
export default function ExampleTextInputBEMError() {
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
