import React from 'react';
import TextInputGlamorous from 'ps-react/TextInputGlamorous';

/** Required TextInput with error */
export default function ExampleTextInputGlamorousError() {
    return (
        <TextInputGlamorous 
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    );
}
