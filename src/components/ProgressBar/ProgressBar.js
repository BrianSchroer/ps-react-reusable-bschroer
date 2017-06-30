import React from 'react';
import PropTypes from 'prop-types';

/** Progress bar: Color is red for 0-50%, light green for 51-99%, green for 100% */
class ProgressBar extends React.Component {
   getColor = (percent) => {
        return (percent > 50) ? 'lightgreen' : 'red';
    }

    getWidthAsPercentOfTotalWidth = (totalWidth, percent) => 
        parseInt(totalWidth * (percent / 100), 10); 

    render() {
        const {percent, width, height} = this.props;
        const backgroundColor = this.getColor(percent);
        const border = 'solid 1px lightgray';

        return (
            <div style={{border, width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(width, percent),
                    height,
                    backgroundColor
                }} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Bar width */
    width: PropTypes.number.isRequired,

    /** Bar height */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 15,
    width: 200,
    percent: 0
}

export default ProgressBar;