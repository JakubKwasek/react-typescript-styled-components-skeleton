import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { Normalize } from "styled-normalize";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styled";

const init = (): void => {
	ReactDOM.render(
		<Grommet theme={grommet}>
			<Normalize />
			<GlobalStyle />
			<AppRouter />
		</Grommet>,
		document.getElementById("app")
	);
};

window.addEventListener("DOMContentLoaded", init);
