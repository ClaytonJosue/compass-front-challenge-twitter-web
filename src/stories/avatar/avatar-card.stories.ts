import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Avatar Icon'
} as Meta

export const AvatarCard: Story = () => {
	return `
	<div class="aside__left--user">
        <img src="../../../assets/images/Profile-Picture.svg" class="aside__left--image" alt="Image of your profile">
        <div class="user__informations">
            <h3 class="user__informations--name">Clayton Josué</h3>
            <p class="user__informations--id">@Clayton_Josue1</p>
        </div>
        <a href="404.html"><img src="../../../assets/icons/User-more-icon.svg" alt="more configuration"></a>
    </div>
	`;
}
