import React from 'react';
import { Card } from '.';

export default {
    title: 'Components/mollecules/card',
    component: Card
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true
};
