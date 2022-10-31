import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Cards/Who to Follow'
} as Meta

export const FollowCard: Story = () => {
	return `
				<section class="follow__card" style="width: 45%">
          <header class="happening__card--header">
            <h2 class="happening__header--title">Who to follow</h2>
          </header>
          <div class="follow__card--user">
            <figure>
              <img src="../../../assets/images/Bessie-image.svg" class="user__image" alt="Image of the Bessie's profile">
            </figure>
            <div class="follow__user--informations">
              <h3 class="user__informations--name">Bessie Cooper</h3>
              <p class="user__informations--nickname">@alessandroveronezi</p>
            </div>
            <a href="404.html" class="user__button--one">Follow</a>
          </div>

          <div class="follow__card--user">
            <figure>
              <img src="../../../assets/images/Jenny-image.svg" class="user__image" alt=" Image of the Jenny's profile">
            </figure>
            <div class="follow__user--informations">
              <h3 class="user__informations--name">Jenny Wilson</h3>
              <p class="user__informations--nickname">@gabrielcantarin</p>
            </div>
            <a href="404.html" class="user__button--two">Follow</a>
          </div>

          <div class="follow__card--link">
            <a href="404.html" class="follow__card--showmore">Show more</a>
          </div>
        </section>
	`
}

