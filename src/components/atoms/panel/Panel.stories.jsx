import React from 'react';
import { Panel } from '.';

export default {
    title: 'Components/atoms/Panel',
    component: Panel,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <Panel {...args}>
        <p>Panel example</p>
    </Panel>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Panel'
};
