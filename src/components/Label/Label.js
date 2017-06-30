import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, block styling */
function Label({htmlFor, label, required}) {
    return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
            {label} {required && <span style={{color: 'red'}}> * </span>}
        </label>
    );
}

Label.propTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Is associated input required? */
    required: PropTypes.bool
}

Label.defaultProps = {
    required: false
}

export default Label;
