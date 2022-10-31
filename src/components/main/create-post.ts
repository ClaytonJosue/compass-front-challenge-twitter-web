import { tweetInput } from "./activated-button";

const postContent: HTMLElement = document.querySelector(".posts__content") as HTMLElement;
export const tweetBtn: HTMLButtonElement = document.querySelector("#tweetBtn") as HTMLButtonElement;

function createPost() {
	let card = document.createElement("section");
	card.classList.add("tweet-post");
	card.innerHTML = `
		<figure>
			<img src="../../../assets/images/Profile-Picture.svg" class="aside__left--image">
		</figure>

			<div class="post">
				<div class="post__user">
					<h2 class="post__user--name">Clayton Josué</h2>
					<h3 class="post__user--nickname">@clayton_josue</h3>
					<p class="post__user--dot">·</p>
					<h4 class="post__user--time">23s</h4>
				</div>
				<p class="post__content">${tweetInput.value}</p>

				<div class="post__file">
					<img src="public/assets/images/Astronaut-Image.png" class="user__image" alt="Image of an Astronaut">
				</div>

				<div class="post__icons">
					<div class="post__icons--content">
						<img src="public/assets/icons/Comments-icon.svg" alt="Comments icon">
						<span class="post__icons--number">61</span>
					</div>

					<div class="post__icons--content">
						<img src="public/assets/icons/Retweet-icon.svg" alt="Retweet icon">
						<span class="post__icons--number">12</span>
					</div>

					<div class="post__icons--content">
						<img src="public/assets/icons/Like-icon.svg" alt="Like icon">
						<span class="post__icons--number">6.2K</span>
					</div>

					<div class="post__icons--content">
						<img src="public/assets/icons/Share-icon.svg" alt="Share icon">
						<span class="post__icons--number">61</span>
					</div>
				</div>
            	<a class="post-thread" href="404.html">Show this thread</a>
        	</div>
	`
	postContent.appendChild(card);
	postContent.insertAdjacentElement("afterbegin", card);
	clear();
}

function clear() {
	tweetInput.value = '';
	tweetInput.focus();
}

tweetBtn.addEventListener("click", createPost);