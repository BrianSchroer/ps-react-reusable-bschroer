import React from 'react';
import {snapshotHelper, enzymeHelper,  shallow} from '../../util/testHelpers';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
    it('toggles input type when show/hide password clicked', () => {
        const wrapper = shallow(
            <PasswordInput
                htmlId="test"
                name="test"
                onChange={() => {}}
                value=""
                showVisibilityToggle />
        );

        enzymeHelper.assertAttributeValue(wrapper, 'type', 'password');

        enzymeHelper.findSingle(wrapper, 'button').simulate('click');

        enzymeHelper.assertAttributeValue(wrapper, 'type', 'text');
    });

    it('hides password quality by default', () => {
        snapshotHelper.assertMatch(
            <PasswordInput
                htmlId="test"
                name="test"
                onChange={() => {}}
                value="Uisi38#8iad" />
        )
    });
 
     it('shows password quality when enabled and a password is rendered', () => {
        snapshotHelper.assertMatch(
            <PasswordInput
                htmlId="test"
                name="test"
                onChange={() => {}}
                showQuality
                value="Uisi38#8iad" />
        )
    });
 
    it('hides password quality when enabled but no password is rendered', () => {
        snapshotHelper.assertMatch(
            <PasswordInput
                htmlId="test"
                name="test"
                onChange={() => {}}
                showQuality
                value="" />
        )
    });
});
