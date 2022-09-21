import React from 'react';
import { Card } from '.';

export default {
    title: 'Components/mollecules/card',
    component: Card
};

const Template = (args) => (
    <Card
        {...args}
        heading="Argent Bank Checking (x8349)"
        balance="$2,082.79"
        balanceLabel="Available Balance"
    />
);

export const Primary = Template.bind({});
Primary.args = {
    primary: true
};
