import React from 'react';
import { MenuItem } from '.';

export default {
    title: 'Components/atoms/link/MenuItem',
    component: MenuItem
};

const Template = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Sign in',
    href: '/'
};
