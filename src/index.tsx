import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { MainContainer } from "./containers/MainContainer";
import { MainTheme } from "./theme";

const init = (): void => {
	ReactDOM.render(
		<ThemeProvider theme={MainTheme}>
			<Normalize />
			<MainContainer />
		</ThemeProvider>,
		document.getElementById("app")
	);
};

window.addEventListener("DOMContentLoaded", () => init());
