import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Components/Input'
} as Meta

export const InputPost: Story = () => {
	return `
		<section class="middle__post">
        	<div class="middle__post--input">
            	<img src="../../../assets/images/middle-profile.svg" class="middle__image--profile" alt="Big profile image">
            	<textarea cols="15" maxlength="380" class="tweet-input" placeholder="What's happening?"></textarea>
            </div>
            <div class="middle__post--buttons">
            	<div class="middle__post--emojis">
            		<img src="../../../assets/icons/Emoji-image-icon.svg" class="emoji__icon">
                	<img src="../../../assets/icons/Emoji-gif-icon.svg" class="emoji__icon">
                	<img src="../../../assets/icons/Emoji-graph-icon.svg" class="emoji__icon">
                	<img src="../../../assets/icons/Emoji-happy-icon.svg" class="emoji__icon">
                	<img src="../../../assets/icons/Emoji-date-icon.svg" class="emoji__icon">
            	</div>
            	<button class="middle__post--button" id="tweetBtn" disabled>Tweet</button>
            </div>
        </section>
	`
}
