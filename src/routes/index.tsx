import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainContainer } from "../containers/MainContainer";
import { StoreContainer } from "../containers/StoreContainer";
import { CartContainer } from "../containers/CartContainer";
import { NotFoundContainer } from "../containers/NotFoundContainer";
import { HeaderMain } from "../components/Header/";
import { Box } from "grommet/components/Box";
import { Grid } from "grommet/components/Grid";


export const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<Grid
			rows={["xxsmall", "100%"]}
			columns={["10%", "80%", "10%"]}
			gap="0"
			areas={[
				{ name: "header", start: [0, 0], end: [2, 0], },
				{ name: "main", start: [1, 1], end: [1, 1], }
			]}
		>
			<Box gridArea="header" background="brand">
				<HeaderMain/>
			</Box>
			<Box gridArea="main">
				<Switch>
					<Route path="/" component={ MainContainer } exact={ true } />
					<Route path="/store" component={ StoreContainer } />
					<Route path="/cart" component={ CartContainer } exact={ true } />
					<Route component={ NotFoundContainer } />
				</Switch>
			</Box>
		</Grid>
	</BrowserRouter>
);
