import { Story, Meta } from '@storybook/html';
import '../../css/style.css'

export default {
	title: 'Post/Tweet Post'
} as Meta

export const PostOne: Story = () => {
	return `
	<section class="tweet-post">
        <figure>
        	<img src="../../../assets/images/Devon-Profile.svg" alt="Image of Devon user" class="tweet__user">
        </figure>
		<div class="post">
        	<div class="post__user">
            	<h2 class="post__user--name">Devon Lane</h2>
            	<h3 class="post__user--nickname">@johndue</h3>
            	<p class="post__user--dot">·</p>
            	<h4 class="post__user--time">23s</h4>
        	</div>
        	<p class="post__content">Tom is in a big hurry.</p>

        	<div class="post__file">
            	<img src="../../../assets/images/Astronaut-Image.png" class="user__image" alt="Image of an Astronaut">
        	</div>

        	<div class="post__icons">
        		<div class="post__icons--content">
            		<img src="../../../assets/icons/Comments-icon.svg" alt="Comments icon">
            		<span class="post__icons--number">61</span>
            	</div>

            	<div class="post__icons--content">
            		<img src="../../../assets/icons/Retweet-icon.svg" alt="Retweet icon">
            		<span class="post__icons--number">12</span>
            	</div>

            	<div class="post__icons--content">
            		<img src="../../../assets/icons/Like-icon.svg" alt="Like icon">
            		<span class="post__icons--number">6.2K</span>
            	</div>

            	<div class="post__icons--content">
            		<img src="../../../assets/icons/Share-icon.svg" alt="Share icon">
            		<span class="post__icons--number">61</span>
            	</div>
        	</div>
        	<a class="post-thread" href="404.html">Show this thread</a>
    	</div>
	</section>
	`
}

export const PostTwo: Story = () => {
	return `
	<section class="tweet-post">
        <figure>
          <img src="../../../assets/images/Darlene-Profile.svg" alt="Image of Darlene user" class="tweet__user">
        </figure>

        <div class="post">
          <div class="post__user">
            <h2 class="post__user--name">Darlene Robertson</h2>
            <h3 class="post__user--nickname">@johndue</h3>
            <p class="post__user--dot">·</p>
            <h4 class="post__user--time">23s</h4>
          </div>
          <p class="post__content">Tom is in a big hurry.</p>

          <div class="post__file">
            <img src="../../../assets/images/Kitchen-Post.png" class="user__image" alt="Image of a Kitchen">
          </div>

          <div class="post__icons">
            <div class="post__icons--content">
              <img src="../../../assets/icons/Comments-icon.svg" alt="Comments icon">
              <span class="post__icons--number">61</span>
            </div>

            <div class="post__icons--content">
              <img src="../../../assets/icons/Retweet-icon.svg" alt="Retweet icon">
              <span class="post__icons--number">12</span>
            </div>

            <div class="post__icons--content">
              <img src="../../../assets/icons/Like-icon.svg" alt="Like icon">
              <span class="post__icons--number">6.2K</span>
            </div>

            <div class="post__icons--content">
              <img src="../../../assets/icons/Share-icon.svg" alt="Share icon">
              <span class="post__icons--number">61</span>
            </div>
          </div>
          <a class="post-thread" href="404.html">Show this thread</a>
        </div>
      </section>
	`
}