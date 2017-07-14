import React from 'react';
import TextInput from '../../../components/TextInput';

/** Required TextInput with error */
export default function ExampleTextInputError() {
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
