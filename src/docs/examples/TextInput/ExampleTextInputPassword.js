import React from 'react';
import TextInput from '../../../components/TextInput';

/** Password TextInput with max length of 12 */
export default function ExampleTextInputPassword() {
    return (
        <TextInput 
            htmlId="example-password"
            label="Password"
            name="password"
            type="password"
            onChange={() => {}}
            required
            maxLength={12}
        />
    );
}
