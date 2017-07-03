import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/** Required TextInput with error */
export default function ExampleTextInputStyledComponentsError() {
    return (
        <TextInputStyledComponents 
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    );
}
