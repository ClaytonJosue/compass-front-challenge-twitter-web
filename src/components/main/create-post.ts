import { tweetInput } from "./activated-button.js";

const image: HTMLInputElement = document.querySelector(".image__input") as HTMLInputElement;
const postContent: HTMLElement = document.querySelector(".posts__content") as HTMLElement;
export const tweetBtn: HTMLButtonElement = document.querySelector("#tweetBtn") as HTMLButtonElement;

function createImage(file: any) {
	const value = tweetInput.value;

	if (file[0]) {
		const fileReader = new FileReader();
		let src: string | any = "";

		fileReader.onload = function (event) {
			src = event.target?.result;
			createPost(src, value);
			tweetBtn.disabled = true;
		}

		fileReader.readAsDataURL(file[0]);
	}
}

function createPost(src: any, value: string) {
	let card: HTMLElement = document.createElement("section");
	card.classList.add("tweet-post");
	card.innerHTML = `
		<figure>
			<img src="../../../assets/images/Profile-Picture.svg" class="aside__left--image">
		</figure>

			<div class="post">
				<div class="post__user">
					<h2 class="post__user--name">Clayton Josué</h2>
					<h3 class="post__user--nickname">@Clayton_Josue1</h3>
					<p class="post__user--dot">·</p>
					<h4 class="post__user--time">0s</h4>
				</div>
				<p class="post__content">${value}</p>

				<div class="post__file">
					<img src="${src}" class="user__image" alt="Image of an Astronaut">
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
						<span class="post__icons--number like__number">6.2K</span>
					</div>

					<div class="post__icons--content">
						<img src="../../../assets/icons/Share-icon.svg" alt="Share icon">
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
	image.value = '';
	tweetInput.focus();
}

tweetBtn.addEventListener("click", () => {
	createImage(image.files);
});