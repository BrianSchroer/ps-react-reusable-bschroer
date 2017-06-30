import React from 'react';
import PropTypes from 'prop-types'
import highlightJs from 'highlight.js/lib/highlight';
import jsLanguage from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {
    componentDidMount() {
        highlightJs.registerLanguage('javascript', jsLanguage); 
        highlightJs.highlightBlock(this.element);
    }

    normalizeLineEndings = (code) => code.replace(/\r\n/g, '\n'); 

    render() {
        return (
            <pre ref={ref => {this.element = ref}}>
                <code>
                    {this.normalizeLineEndings(this.props.children)}
                </code>
            </pre>
        )
    }
}

CodeExample.PropTypes = {
    children: PropTypes.string.isRequired
}

export default CodeExample;
