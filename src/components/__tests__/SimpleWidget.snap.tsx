import * as React from "react";
import * as renderer from "react-test-renderer";
import { SimpleWidget } from "../SimpleWidget";

describe("SimpleWidget", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SimpleWidget name={"User"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
