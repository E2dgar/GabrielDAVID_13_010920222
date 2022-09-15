import React from 'react';
import { Icon } from '.';

export default {
    title: 'Components/atoms/icon',
    component: Icon
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    className: 'feature-icon',
    alt: 'Alt text',
    src: '/assets/img/icon-chat.png'
};
