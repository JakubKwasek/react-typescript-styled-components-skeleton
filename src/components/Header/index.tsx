import * as React from "react";
import {
	HeaderStyled,
	HeaderItemStyled,
	NavLinkStyled,
	HeaderItemLinksStyled
} from "./styled";

export const Header = (): JSX.Element => (
	<HeaderStyled>
		<HeaderItemStyled>Movie Store</HeaderItemStyled>
		<HeaderItemLinksStyled>
			<NavLinkStyled to="/" activeClassName="is-active" exact={true}>Dashboard</NavLinkStyled>
			<NavLinkStyled to="/store" activeClassName="is-active">Store</NavLinkStyled>
			<NavLinkStyled to="/cart" activeClassName="is-active">Cart</NavLinkStyled>
		</HeaderItemLinksStyled>
	</HeaderStyled>
);
