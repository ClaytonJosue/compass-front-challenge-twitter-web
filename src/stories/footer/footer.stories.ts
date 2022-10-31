import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Cards/Footer Card'
} as Meta

export const Footer: Story = () => {
	return `
<footer class="twitter__footer" style="height: 20vh">
	<div class="footer__informations">
		<h2 class="footer__informations--title">Don't miss what's happening</h2>
		<p class="footer__informations--text">People on Twitter are the first to know</p>
	</div>
	<div class="footer__buttons" style="margin-right: 30px">
		<a href="404.html" class="footer__button--login">Login</a>
		<a href="404.html" class="footer__button--signup">Sign-up</a>
	</div>
</footer>
	`
}

