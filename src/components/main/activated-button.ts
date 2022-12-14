import { tweetBtn } from "../main/create-post";

export const tweetInput: HTMLInputElement = document.querySelector(".tweet-input") as HTMLInputElement;

tweetInput.addEventListener("input", () => {
	if (tweetInput.value.length > 0) {
		tweetBtn.disabled = false;
	} else {
		tweetBtn.disabled = true;
	}
})