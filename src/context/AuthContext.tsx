"use client";
import { SetStateAction, createContext, useContext, useState } from "react";

interface AuthContextProps {
  userInfo: UserInfoProps;
  setUserInfo: React.Dispatch<SetStateAction<UserInfoProps>>;
}

interface UserInfoProps {
  email: string;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps);
  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
};

export default AuthContextProvider;
