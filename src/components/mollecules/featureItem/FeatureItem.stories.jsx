import React from 'react';
import { FeatureItem } from '.';

export default {
    title: 'Components/mollecules/featureItem',
    component: FeatureItem
};

const Template = (args) => <FeatureItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    titleContent: 'You are our #1 priority',
    textContent:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    src: '/assets/img/icon-chat.png',
    alt: 'Chat icon'
};
