import React from 'react';
import TextInput from '../../../components/TextInput';

/** TextInput with placeholder */
export default function ExampleTextInputPlaceholder() {
    return (
        <TextInput 
            htmlId="example-placeholder"
            label="Comment"
            name="comment"
            placeholder="Be nice"
            onChange={() => {}}
        />
    );
}
