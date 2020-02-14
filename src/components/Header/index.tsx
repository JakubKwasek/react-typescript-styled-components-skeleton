import * as React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled, HeaderItemStyled } from "./styled";

export const Header = (): JSX.Element => (
	<HeaderStyled>
		<HeaderItemStyled>Cart application</HeaderItemStyled>
		<HeaderItemStyled>
			<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
			<NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
			<NavLink to="/store" activeClassName="is-active">Store</NavLink>
		</HeaderItemStyled>
	</HeaderStyled>
);
