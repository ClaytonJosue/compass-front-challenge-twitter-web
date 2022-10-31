import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Icons/MenuIcons'
} as Meta

export const Menu: Story = () => {
	return `
		<img src="../../../assets/icons/Twitter-logo.svg" alt="Logo of Twitter">
	
        <nav class="aside__left--navigation">
          <ul class="aside__left--list">

            <li class="aside__left--item">
              <figure>
				<img src="../../../assets/icons/Home-icon.svg" alt="Home icon">
              </figure>
              <a href="index.html" class="item__link home">Home</a>
            </li>

            <li class="aside__left--item">
              <figure>
				<img src="../../../assets/icons/Explore-icon.svg" alt="Explore icon">
              </figure>
              <a href="404.html" class="item__link">Explore</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/Notifications-icon.svg" alt="Notifications icon">
              </figure>
              <a href="404.html" class="item__link">Notifications</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/Message-icon.svg" alt="Messages icon">
              </figure>
              <a href="404.html" class="item__link">Messages</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/Bookmarks-icon.svg" alt="Bookmarks icon">
              </figure>
              <a href="404.html" class="item__link">Bookmarks</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/Lists-icon.svg" alt="Lists icon">
              </figure>
              <a href="404.html" class="item__link">Lists</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/Profile-icon.svg" alt="Profile icon">
              </figure>
              <a href="404.html" class="item__link">Profile</a>
            </li>

            <li class="aside__left--item">
              <figure>
                <img src="../../../assets/icons/More-icon.svg" alt="More icon">
              </figure>
              <a href="404.html" class="item__link">More</a>
            </li>

          </ul>
          <button class="aside__left--button" id="asideBtn">Tweet</button>
        </nav>
		`
}