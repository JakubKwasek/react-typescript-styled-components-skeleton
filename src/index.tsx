import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { MainTheme } from "./theme";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styled";

const init = (): void => {
	ReactDOM.render(
		<ThemeProvider theme={MainTheme}>
			<Normalize />
			<GlobalStyle />
			<AppRouter />
		</ThemeProvider>,
		document.getElementById("app")
	);
};

window.addEventListener("DOMContentLoaded", () => init());
