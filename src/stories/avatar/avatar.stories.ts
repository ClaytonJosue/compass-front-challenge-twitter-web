import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Avatar Icon'
} as Meta

export const AvatarSmall: Story = () => {
	return `
	<figure>
		<img src="../../../assets/images/Profile-Picture.svg" class="aside__left--image" alt="Small avatar">
	</figure>
	`;
}

export const AvatarMedium: Story = () => {
	return `
	<figure>
		<img src="../../../assets/images/middle-profile.svg" class="middle__image--profile" alt="Medium avatar">
	</figure>
	
	`
}