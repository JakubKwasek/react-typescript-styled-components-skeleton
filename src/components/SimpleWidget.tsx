import * as React from "react";
import { SimpleWidgetStyled } from "./styled";

export interface SimpleWidget {
  name: string;
}

export const SimpleWidget = (props: SimpleWidget): JSX.Element => (
  <SimpleWidgetStyled>
    <h2>Hello there:</h2>
    <h3>{props.name}</h3>
  </SimpleWidgetStyled>
);
