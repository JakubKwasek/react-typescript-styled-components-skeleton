import * as React from "react";
import * as renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { HeaderMain } from "../";

describe("HeaderMain", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<BrowserRouter><HeaderMain /></BrowserRouter>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
