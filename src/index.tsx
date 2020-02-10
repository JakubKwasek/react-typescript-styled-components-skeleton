import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainContainer } from "./containers/MainContainer";

const init = (): void => {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById("app")
  );
};

window.addEventListener("DOMContentLoaded", () => init());
