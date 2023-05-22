import cardNumberWidget from "./widget";
import "../css/style.css";

const container = document.querySelector(".container");
const widget = new cardNumberWidget(container);

widget.bindToDOM();
