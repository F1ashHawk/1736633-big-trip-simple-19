import {html} from '../utils';

export default class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`<h1>Hello world</h1>`;
  }

  changeColor() {
    this.style = 'color: tomato';
  }
}

customElements.define('hello-world', HelloWorld);
