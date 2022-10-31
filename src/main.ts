import './css/style.css';
import './components/aside-left/input-focus.js';
import './components/main/activated-button.js';

export const leftBtn: HTMLElement = document.querySelector("#asideBtn") as HTMLElement;
export const tweetBtn: HTMLButtonElement = document.querySelector("#tweetBtn") as HTMLButtonElement;

tweetBtn.disabled = true;