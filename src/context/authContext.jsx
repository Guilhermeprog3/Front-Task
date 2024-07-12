import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { axiosClient } from "../service/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axiosClient.post("/login", { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        localStorage.setItem(
          "@Auth:user",
          JSON.stringify(response.data.userId)
        );
        localStorage.setItem("@Auth:token", response.data.accessToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const singOut = () => {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        singOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
