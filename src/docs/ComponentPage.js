import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
    const {name, description, props, examples} = component;
    const exampleCount = (examples && examples.length) ? examples.length : 0;

    return (
        <div className="componentpage">
            <h2>{name}</h2>
            <p>{description}</p>

            <h3>Example{exampleCount !== 1 && "s"}</h3>
            {
                (exampleCount)
                    ? examples.map(example => <Example key={example.code} example={example} componentName={name} />)
                    : "No examples exist."
            }

            <h3>Props</h3>
            {
                (props) ? <Props props={props} /> : "This component accepts no props."
            }
        </div>
    );
};

ComponentPage.propTypes = {
    component: PropTypes.object.isRequired
};

export default ComponentPage;