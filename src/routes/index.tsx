import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainContainer } from "../containers/MainContainer";
import { StoreContainer } from "../containers/StoreContainer";
import { CartContainer } from "../containers/CartContainer";
import { NotFoundContainer } from "../containers/NotFoundContainer";
import { HeaderMain } from "../components/Header/";
// import { Container } from "../components/Container/styled";
import { Container } from "@bootstrap-styled/v4";

export const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<HeaderMain />
		<Container>
			<Switch>
				<Route path="/" component={ MainContainer } exact={ true } />
				<Route path="/store" component={ StoreContainer } />
				<Route path="/cart" component={ CartContainer } exact={ true } />
				<Route component={ NotFoundContainer } />
			</Switch>
		</Container>
	</BrowserRouter>
);
