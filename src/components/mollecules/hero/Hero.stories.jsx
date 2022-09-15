import React from 'react';
import { Hero } from '.';

export default {
    title: 'Components/mollecules/hero',
    component: Hero
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    primary: true
};
