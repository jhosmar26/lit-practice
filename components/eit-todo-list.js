import { LitElement, html, css } from "lit";
import { icons } from "../libs/icons";
import "./eit-todo-search";

export class EitTodoList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      h1 {
        font-size: 1.2rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 0.5rem;
      }

      div {
        background-color: #eee;
        padding: 1rem;
      }
    `,
  ];

  static properties = {
    loggedIn: { type: Boolean },
    role: { type: String },
  };

  constructor() {
    super();
    this.loggedIn = false;
    this.role = "administrator";
  }
  render() {
    return html`
      <button @click=${this.changeLoggedIn}>Cambiar logeo</button>
      ${this.loggedIn
        ? html`
            ${this.loggedIn ? "si está logeado" : "no logeado"}
            ${this.headingTemplate}
            <eit-todo-search></eit-todo-search>
            ${this.bodyTemplate} ${this.sayHello(this.role)}
          `
        : `no está logeado`}
    `;
  }

  get headingTemplate() {
    return html`<h1>Todo List</h1>`;
  }

  get bodyTemplate() {
    return html`${icons.done}`;
  }

  changeLoggedIn() {
    this.loggedIn = !this.loggedIn;
  }

  sayHello(role) {
    switch (role) {
      case "administrator":
        return html`Hola <b>Administrador</b>`;
      case "premium":
        return html`Hola usuario <i>premium</i>`;
      default:
        return "Hola usuario común";
    }
  }

  get userPremiumTemplate() {
    return html`
      <p>Este es el menú para el usuario premium</p>
      <ul>
        <li>Uno</li>
        <li>Dos</li>
      </ul>
    `;
  }
}
customElements.define("eit-todo-list", EitTodoList);
