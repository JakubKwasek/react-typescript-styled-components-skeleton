import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainContainer } from "../containers/MainContainer";
import { StoreContainer } from "../containers/StoreContainer";
import { CartContainer } from "../containers/CartContainer";
import { NotFoundContainer } from "../containers/NotFoundContainer";
import { Header } from "../components/Header/";
import { Container } from "../components/Container/styled";

export const AppRouter = (): JSX.Element => (
	<BrowserRouter>
		<Header />
		<Container>
			<Switch>
				<Route path="/" component={ MainContainer } exact={ true } />
				<Route path="/store" component={ StoreContainer } />
				<Route path="/cart" component={ CartContainer } exact={ true } />
				<Route path="/cart/:id" component={ CartContainer } />
				<Route component={ NotFoundContainer } />
			</Switch>
		</Container>
	</BrowserRouter>
);
