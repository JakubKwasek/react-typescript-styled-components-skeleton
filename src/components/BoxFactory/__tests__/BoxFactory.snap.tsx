import * as React from "react";
import * as renderer from "react-test-renderer";
import { BoxFactory } from "../";

describe("BoxFactory", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<BoxFactory width={"xsmall"}><p>Test content</p></BoxFactory>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
