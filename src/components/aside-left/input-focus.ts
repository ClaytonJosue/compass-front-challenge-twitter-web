import { tweetInput } from "../main/activated-button";
export const leftBtn: HTMLElement = document.querySelector("#asideBtn") as HTMLElement;

leftBtn.addEventListener("click", () => {
	tweetInput.focus();
});