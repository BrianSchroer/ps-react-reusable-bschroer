import React from 'react';
import TextInput from '../../../components/TextInput';

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
