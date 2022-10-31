import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Post Icons'
} as Meta

export const CommentIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Comments-icon.svg">
	`
}

export const RetweetIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Retweet-icon.svg" alt="Retweet icon">
	`
}

export const LikeIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Like-icon.svg" alt="Like icon">
	`
}

export const ShareIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Share-icon.svg" alt="Share icon">
	`
}