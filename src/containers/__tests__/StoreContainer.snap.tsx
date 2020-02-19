import * as React from "react";
import * as renderer from "react-test-renderer";
import { StoreContainer } from "../StoreContainer";

describe("StoreContainer", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<StoreContainer />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
