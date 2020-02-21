import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "grommet/es6/components/Box";
import { Header } from "grommet/es6/components/Header";

export const HeaderMain = (): JSX.Element => (
	<Header background="light-4" pad="small">
		Movie Shop
		<Box direction="row" gap="medium">
			<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
			<NavLink to="/store" activeClassName="is-active">Store</NavLink>
			<NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
		</Box>
	</Header>
);
