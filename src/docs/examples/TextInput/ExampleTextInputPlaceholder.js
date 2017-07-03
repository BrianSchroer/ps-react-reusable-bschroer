import React from 'react';
import TextInput from 'ps-react/TextInput';

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
