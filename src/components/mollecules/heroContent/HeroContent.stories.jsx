import React from 'react';
import { HeroContent } from '.';

export default {
    title: 'Components/mollecules/heroContent',
    component: HeroContent
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeroContent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    primary: true
};
