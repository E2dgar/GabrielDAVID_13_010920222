import React from 'react';
import { Paragraph } from '.';

export default {
    title: 'Components/atoms/Paragraph',
    component: Paragraph
};

const Template = (args) => <Paragraph {...args}>This is a paragraph</Paragraph>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Paragraph',
    className: 'paragraph'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Paragraph',
    className: 'subtitle'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Paragraph',
    className: 'account-amount'
};
