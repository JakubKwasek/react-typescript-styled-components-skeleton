import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grommet } from "grommet";
import { grommet, dark } from "grommet/themes";
import { Normalize } from "styled-normalize";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styled";

const myTheme = {
	"$btn-primary-bg": "blue",
	"$btn-primary-color": "white",
	"$hr-border-color": "red",
};

const init = (): void => {
	ReactDOM.render(
		<Grommet theme={dark}>
			<Normalize />
			<GlobalStyle />
			<AppRouter />
		</Grommet>,
		document.getElementById("app")
	);
};

window.addEventListener("DOMContentLoaded", init);
