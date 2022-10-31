import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/MenuIcons'
} as Meta

export const Home: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Home-icon.svg" alt="Home icon">
	</figure>
	`;
}

export const Explore: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Explore-icon.svg" alt="Explore icon">
	</figure>
	
	`
}

export const Notifications: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Notifications-icon.svg" alt="Notifications icon">
	</figure>
	`
}

export const Messages: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Message-icon.svg" alt="Messages icon">
	</figure>
	`
}

export const Bookmarks: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Bookmarks-icon.svg" alt="Bookmarks icon">
	</figure>
	`
}

export const Lists: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Lists-icon.svg" alt="Lists icon">
	</figure>
	`
}

export const Profile: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/Profile-icon.svg" alt="Profile icon">
	</figure>
	`
}

export const More: Story = () => {
	return `
	<figure>
		<img src="../../../assets/icons/More-icon.svg" alt="More icon">
	</figure>
	`
}