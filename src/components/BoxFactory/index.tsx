import * as React from "react";
import { Box, BoxProps } from "grommet";

export const BoxFactory = (
	props: BoxProps & {children: JSX.Element}
): JSX.Element => (
	<Box
		height={{ min: "160px", }}
		pad="small"
		align={"start"}
		direction={"column"}
		gap="medium"
		{...props}>
		{props.children}
	</Box>
);
