import * as React from "react";
import * as renderer from "react-test-renderer";
import { CartContainer } from "../CartContainer";

describe("CartContainer", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<CartContainer />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
