import * as React from "react";
import * as renderer from "react-test-renderer";
import { MainContainer } from "../MainContainer";

describe("MainContainer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
