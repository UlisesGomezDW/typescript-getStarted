import * as React from "react";
import { render } from "react-dom";
import { Store } from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Store>
    <App />
  </Store>,
  rootElement
);
