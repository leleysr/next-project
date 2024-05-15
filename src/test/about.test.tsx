import { render } from "@testing-library/react";
import About from "../app/about/page";

describe("About page", () => {
  it("Should render page", () => {
    const { getByText } = render(<About></About>);

    expect(getByText("About Us")).toBeInTheDocument();
  });
});
