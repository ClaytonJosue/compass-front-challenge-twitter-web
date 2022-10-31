import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Components/Search'
} as Meta

export const SearchInput: Story = () => {
	return `
	<div class="search">
		<img src="public/assets/icons/Search-icon.svg" class="search-icon">
		<input type="text" class="search-input" placeholder="Search Twitter">
	</div>
	`
}
