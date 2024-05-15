import { render } from "@testing-library/react";
import MyAccount from "../app/my-account/page";
import { AuthContext } from "../context/AuthContext";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: () => null,
    };
  },
}));

describe("My account page", () => {
  it("Should render logged content", () => {
    const contextMockLogged = {
      userInfo: { email: "teste@email.com", password: "12345678" },
      setUserInfo: jest.fn(),
    };

    const { getByText, queryByText } = render(
      <AuthContext.Provider value={contextMockLogged}>
        <MyAccount />
      </AuthContext.Provider>
    );
    expect(getByText("My informations")).toBeInTheDocument();
    expect(getByText("Email:")).toBeInTheDocument();
    expect(getByText("Password:")).toBeInTheDocument();
    expect(getByText("Logout")).toBeInTheDocument();

    // Verifica se a mensagem de restricted page não está presente para usuários autenticados
    expect(queryByText("Restricted page")).not.toBeInTheDocument();
  });

  it("Should render restricted page message", () => {
    const contextMockLogged = {
      userInfo: { email: "", password: "" },
      setUserInfo: jest.fn(),
    };

    const { getByText, queryByText } = render(
      <AuthContext.Provider value={contextMockLogged}>
        <MyAccount />
      </AuthContext.Provider>
    );
    expect(getByText("Restricted page")).toBeInTheDocument();

    // Verifica se my informations não é exibido para users não logados
    expect(queryByText("My informations")).not.toBeInTheDocument();
  });
});
