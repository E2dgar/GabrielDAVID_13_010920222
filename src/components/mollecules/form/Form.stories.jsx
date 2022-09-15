import React from 'react';
import { Form } from '.';

export default {
    title: 'Features/Form',
    component: Form,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        className: 'panel'
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    className: 'sign-in-content'
};
