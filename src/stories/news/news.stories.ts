import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Post/Tweet News'
} as Meta

export const News: Story = () => {
	return `
				<section class="happening__card">
          <header class="happening__card--header">
            <h2 class="happening__header--title">What's happening</h2>
          </header>
          <div class="happening__card--content">
            <div class="happening__card--news">
              <div class="news__content">
                <h4 class="news__content--title">COVID 19 · Last night</h4>
                <h3 class="news__content--informations">England’s Chief Medical Officer says the UK is at the most
                  dangerous time of the pandemic</h3>
              </div>
              <figure>
                <img src="../../../assets/images/Covid-image.svg" class="news__image">
              </figure>
              <div class="news__content--tags">
                <p class="news__content--tags--title">Trending with</p>
                <a href="404.html" class="news__content--tags--link">#covid19</a>
              </div>
            </div>

            <div class="happening__card--news">
              <div class="news__content">
                <h4 class="news__content--title">US news · 4h ago</h4>
                <h3 class="news__content--informations">Parler may go offline following suspensions by Amazon, Apple and
                  Google</h3>
              </div>
              <figure>
                <img src="../../../assets/images/Phone-image.svg" class="news__image">
              </figure>
              <div class="news__content--tags">
                <p class="news__content--tags--title">Trending with</p>
                <a href="404.html" class="news__content--tags--link">#trump</a>
              </div>
            </div>

            <div class="happening__card--news">
              <div class="news__content">
                <h4 class="news__content--title">India · 1h ago</h4>
                <h3 class="news__content--informations">India vs Australia: India hold on to earn a draw on Day 5 in
                  Sydney Test</h3>
              </div>
              <figure>
                <img src="../../../assets/images/India-image.svg" class="news__image">
              </figure>
              <div class="news__content--tags">
                <p class="news__content--tags--title">Trending with</p>
                <a href="404.html" class="news__content--tags--link">#sport</a>
              </div>
            </div>
          </div>
          <div class="happening__card--link">
            <a href="404.html" class="happening__card--showmore">Show more</a>
          </div>
        </section>
	`
}