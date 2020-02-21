import * as React from "react";
import { Box } from "grommet/es6/components/Box";
import { BoxProps } from "grommet";

export const BoxFactory = (
	props: BoxProps & {children: JSX.Element}
): JSX.Element => (
	<Box
		height={{ min: "100px", }}
		pad="small"
		align={"start"}
		direction={"column"}
		gap="medium"
		{...props}>
		{props.children}
	</Box>
);
