import React from 'react';
import { H1 } from '.';

export default {
    title: 'Components/atoms/title/h1',
    component: H1
};

const Template = (args) => <H1 {...args}>Welcome back Tony Jarvis !</H1>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true
};
