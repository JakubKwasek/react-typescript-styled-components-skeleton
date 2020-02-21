import * as React from "react";
import { Box } from "grommet/es6/components/Box";

export const NotFoundContainer = (): JSX.Element => (
	<Box
		align="start"
		direction={"row"}
		border={{side: "bottom",}}
		pad="small">
		<h2>404 - Page not found</h2>
		<p>Please enter correct url</p>
	</Box>
);
