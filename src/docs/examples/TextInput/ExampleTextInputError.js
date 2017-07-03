import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextInput with error */
export default function ExampleTextInputErrror() {
    return (
        <TextInput 
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    );
}
