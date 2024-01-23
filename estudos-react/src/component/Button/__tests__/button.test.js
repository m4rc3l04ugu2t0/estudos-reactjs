const { render } = require("@testing-library/react");
import { Button } from "../index";

describe("teste button", () => {
  it("test render", () => {
    render(<Button />);
    expect(1).toBe(1);
  });
});
