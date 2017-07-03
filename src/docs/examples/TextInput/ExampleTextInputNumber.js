import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Numeric TextInput */
export default function ExampleTextInputNumber() {
    return (
        <TextInput 
            htmlId="example-number"
            label="Your IQ"
            name="iq"
            type="number"
            onChange={() => {}}
        />
    );
}
