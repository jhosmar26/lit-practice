import "@dile/dile-input/dile-input";
import "@dile/dile-menu-hamburger/dile-menu-hamburger.js";
import "@dile/dile-nav/dile-nav.js";
import "@dile/dile-selector/dile-selector.js";
import "@dile/dile-selector/dile-selector-item.js";
import "@dile/dile-pages/dile-pages.js";
import "./components/dw-message.js";
import "./components/eit-todo-list";

document
  .getElementById("mainSelector")
  .addEventListener("dile-selected-changed", function () {
    document.querySelector("dile-menu-hamburger").close();
  });
