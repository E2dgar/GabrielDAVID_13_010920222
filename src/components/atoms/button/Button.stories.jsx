import React from 'react';
import { Button } from '.';

export default {
    title: 'Components/atoms/button',
    component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Edit name'
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
    className: 'large-secondary-button',
    label: 'Sign In'
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
    className: 'large-primary-button',
    label: 'Transaction'
};
