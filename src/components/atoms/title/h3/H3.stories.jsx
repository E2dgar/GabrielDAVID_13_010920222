import React from 'react';
import { H3 } from '.';

export default {
    title: 'Components/atoms/title/h3',
    component: H3
};

const Template = (args) => <H3 {...args}>You are our #1 priority</H3>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    className: 'feature-item-title'
};

export const Secondary = Template.bind({});
Secondary.args = {
    className: 'account-title'
};
