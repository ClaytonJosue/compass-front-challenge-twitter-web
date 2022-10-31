import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/Search'
} as Meta

export const SearchIcon: Story = () => {
	return `
	<img src="../../../assets/icons/Search-icon.svg" class="search-icon">
	`
}
