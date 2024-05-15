import { render } from "@testing-library/react";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/AuthContext";

describe("Header Component", () => {
  it("Should display links correctly based on user authentication status", () => {
    // Context Mock
    const contextMock = {
      userInfo: { email: "", password: "" },
      setUserInfo: jest.fn(),
    };

    const { getByText, queryByText, rerender } = render(
      <AuthContext.Provider value={contextMock}>
        <Header />
      </AuthContext.Provider>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Users")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();

    // Verifica se o link de My Account não está presente para usuários autenticados
    expect(queryByText("My Account")).not.toBeInTheDocument();

    jest.clearAllMocks();

    const contextMockLogged = {
      userInfo: { email: "teste@email.com", password: "12345678" },
      setUserInfo: jest.fn(),
    };
    rerender(
      <AuthContext.Provider value={contextMockLogged}>
        <Header />
      </AuthContext.Provider>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Users")).toBeInTheDocument();
    expect(getByText("My Account")).toBeInTheDocument();

    // Verifica se o link de Login não está presente para usuários autenticados
    expect(queryByText("Login")).not.toBeInTheDocument();
  });
});
