import React from 'react';
import { H3 } from '.';

export default {
    title: 'Components/atoms/title/h3',
    component: H3
};

const Template = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    content: 'You are our #1 priority',
    className: 'fetaure-item-title'
};
