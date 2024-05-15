import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../app/login/page";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Login Component", () => {
  it("Should render login form", () => {
    const { getByText, getByLabelText } = render(<Login></Login>);

    expect(getByText("Sign in form")).toBeInTheDocument();
    expect(getByLabelText("Email", { selector: "input" })).toBeInTheDocument();
    expect(
      getByLabelText("Password", { selector: "input" })
    ).toBeInTheDocument();
  });

  it("Should show an error message in the email field", async () => {
    const { getByText, getByLabelText } = render(<Login></Login>);

    const emailInput = getByLabelText("Email", { selector: "input" });
    userEvent.type(emailInput, "teste");

    const signInButton = getByText("Sing in");
    userEvent.click(signInButton);

    await waitFor(() => {
      expect(screen.getByTestId("email-message-error")).toBeInTheDocument();
    });
  });

  it("Should show an error message in the password field", async () => {
    const { getByText, getByLabelText } = render(<Login></Login>);

    const passwordInput = getByLabelText("Password", { selector: "input" });
    userEvent.type(passwordInput, "teste");

    const signInButton = getByText("Sing in");
    userEvent.click(signInButton);

    await waitFor(() => {
      expect(screen.getByTestId("password-message-error")).toBeInTheDocument();
    });
  });

  it("Should prevent sign in with empty data", () => {
    const { getByText } = render(<Login></Login>);

    const signInButton = getByText("Sing in");

    expect(signInButton).toBeDisabled();
  });
});
