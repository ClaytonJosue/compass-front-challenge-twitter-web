import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Header Icon'
} as Meta

export const ToggleMode: Story = () => {
	return `
	<img src="../../../assets/icons/Dark-mode-icon.svg" alt="Toggle mode">
	`
}

