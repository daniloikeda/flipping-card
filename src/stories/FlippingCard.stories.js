import { FlippingCard } from "../FlippingCard";

export default {
    title: 'UI/Flipping card',
    component: FlippingCard,
    argTypes: {
        frontBackgroundColor: {control: 'color'},
        backBackgroundColor: {control: 'color'}
    }
}

const Template = args => <FlippingCard {...args}/>;

export const Default = Template.bind({});