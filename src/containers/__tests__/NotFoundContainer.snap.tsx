import * as React from "react";
import * as renderer from "react-test-renderer";
import { NotFoundContainer } from "../NotFoundContainer";

describe("NotFoundContainer", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<NotFoundContainer />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
