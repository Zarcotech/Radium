import { createContext, useEffect, useState } from "react";

interface AuthContextType {
  currentUser: {
    id: number;
    name: string;
    profilePic: string;
  } | null;
  login: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
});
interface AuthContextProviderProps {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
