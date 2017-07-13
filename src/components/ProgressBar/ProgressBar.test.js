import React from 'react';
import {shallow} from '../../util/testHelpers';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    describe('.getWidthAsPercentOfTotalWidth', () => {

        const progressBar = shallow(<ProgressBar />).instance();
        [
            { totalWidth: 100, percent: 50, expected: 50 },
            { totalWidth: 100, percent: 90, expected: 90 },
            { totalWidth: 100, percent: 10, expected: 10 },
            { totalWidth: 100, percent: 0, expected: 0 },
            { totalWidth: 50, percent: 67, expected: 33 }
        ]
        .forEach(scenario =>
        {
            const {totalWidth, percent, expected} = scenario;

            it(`should return ${expected} for totalWidth: ${totalWidth} / percent: ${percent}`, () => {
                const actual = progressBar.getWidthAsPercentOfTotalWidth(totalWidth, percent);
                expect(actual).toEqual(expected);
            });
        });
    });
});
