import { leftBtn, } from "../../main";
import { tweetInput } from "../main/activated-button";

leftBtn.addEventListener("click", () => {
	tweetInput.focus();
});