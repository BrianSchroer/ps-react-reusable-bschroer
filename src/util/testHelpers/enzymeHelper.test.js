import assert from 'assert';
import React from 'react';
import {shallow, enzymeHelper} from '../testHelpers';
import ProgressBar from '../../components/ProgressBar'; 

describe('enzymeHelper', () => {
    describe('.assertFindCount', () => {
        it('should fail with expected message when counts differ', () => {
            try {
               enzymeHelper.assertFindCount(1, shallow(<ProgressBar />), 'badSelector');
            } catch (error) {
                expect(error.message).toContain(
                    'Expected 1 element(s) for selector "badSelector", but found 0.');
                return;
            }

            assert(null, null, 'Expected error was not thrown.');
        });
    });
});
