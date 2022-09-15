import React from 'react';
import { Paragraph } from '.';

export default {
    title: 'Components/atoms/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args}>This is a paragraph</Paragraph>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Paragraph'
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    primary: true,
    label: 'Paragraph',
    className: 'title-style'
};
