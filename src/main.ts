import './components/aside-left/input-focus.js';
import './components/main/activated-button.js';
import './components/main/create-post.js';
import { tweetBtn } from './components/main/create-post.js';

export const leftBtn: HTMLElement = document.querySelector("#asideBtn") as HTMLElement;

tweetBtn.disabled = true;