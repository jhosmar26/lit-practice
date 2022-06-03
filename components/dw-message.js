import { LitElement, html, css } from "lit";

class DwMessage extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid red;
      padding: 10px;
    }
    div {
      background-color: #fcc;
    }
    p {
      margin-bottom: 0;
    }
  `;

  static properties = {
    msg: { type: String },
  };

  constructor() {
    super();
    this.msg = "mensaje predeterminado con lit";
  }

  render() {
    return html`
      <div>${this.msg}</div>
      <p>testing paragraph</p>
      <button @click=${this.changeMsg}>Click!</button>
    `;
  }

  changeMsg() {
    this.msg = "cambiado el mensaje ";
  }
}

customElements.define("dw-message", DwMessage);
