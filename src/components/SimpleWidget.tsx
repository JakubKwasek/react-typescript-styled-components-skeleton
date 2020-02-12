import * as React from "react";
import { SimpleWidgetStyled } from "./styled";

export interface SimpleWidget {
	name: string;
}

export const SimpleWidget = (props: SimpleWidget): JSX.Element => (
	<SimpleWidgetStyled>
		<h2>Hello there:</h2>
		<p>{props.name}</p>
	</SimpleWidgetStyled>
);
