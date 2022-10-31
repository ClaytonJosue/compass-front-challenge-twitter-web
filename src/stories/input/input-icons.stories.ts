import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Input Icons'
} as Meta

export const ImageIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Emoji-image-icon.svg" class="emoji__icon">
	`
}

export const GifIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Emoji-gif-icon.svg" class="emoji__icon">
	`
}

export const GraphIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Emoji-graph-icon.svg" class="emoji__icon">
	`
}

export const HappyIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Emoji-happy-icon.svg" class="emoji__icon">
	`
}

export const CalendarIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Emoji-date-icon.svg" class="emoji__icon">
	`
}
