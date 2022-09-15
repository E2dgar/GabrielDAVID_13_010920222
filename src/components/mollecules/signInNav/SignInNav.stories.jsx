import React from 'react';
import { SignInNav } from '.';

export default {
    title: 'Components/mollecules/signInNav',
    component: SignInNav
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SignInNav {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true
};
