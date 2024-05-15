import { render } from "@testing-library/react";
import Contact from "../app/contact/page";

describe("Contact page", () => {
  it("Should render page", () => {
    const { getByText } = render(<Contact></Contact>);

    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Email:")).toBeInTheDocument();
    expect(getByText("Whatsapp:")).toBeInTheDocument();
    expect(getByText("Phone:")).toBeInTheDocument();
  });
});
