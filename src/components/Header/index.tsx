import * as React from "react";
import { NavLink } from "react-router-dom";
import { Anchor, Box, Header } from "grommet";
import { A, Navbar, Nav, NavItem, Container, NavbarBrand, Collapse } from "@bootstrap-styled/v4";

export const Avatar = ({ ...rest }) => (
	<Box
		height="xxsmall"
		width="xxsmall"
		round="full"
		background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
		{...rest}
	/>
);

export const HeaderMain = (): JSX.Element => (

	<Header background="light-4" pad="small">
		<Avatar />
		<Box direction="row" gap="medium">
			<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
			<NavLink to="/store" activeClassName="is-active">Store</NavLink>
			<NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
		</Box>
	</Header>
);
