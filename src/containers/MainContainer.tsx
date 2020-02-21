import * as React from "react";
import { Box, Heading } from "grommet";

export const MainContainer = (): JSX.Element => (
	<Box
		justify="center"
		align="center"
		pad="medium"
		background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
		<Heading color="white" level={1}>Welcome!</Heading>
		<Heading color="white" level={3}>Store is ready</Heading>
	</Box>
);
