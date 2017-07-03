import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional TextInput */
export default function ExampleTextInputOptional() {
    return (
        <TextInput 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => {}}
        />
    );
}
