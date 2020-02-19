import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainContainer } from "../containers/MainContainer";
import { StoreContainer } from "../containers/StoreContainer";
import { CartContainer } from "../containers/CartContainer";
import { NotFoundContainer } from "../containers/NotFoundContainer";
import { HeaderMain } from "../components/Header/";
import { Grid } from "grommet";

export const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<HeaderMain />
		<Grid
			fill
			columns={["flex"]}
			rows={["flex"]}
			gap="small"
		>
			<Switch>
				<Route path="/" component={ MainContainer } exact={ true } />
				<Route path="/store" component={ StoreContainer } />
				<Route path="/cart" component={ CartContainer } exact={ true } />
				<Route component={ NotFoundContainer } />
			</Switch>
		</Grid>
	</BrowserRouter>
);
