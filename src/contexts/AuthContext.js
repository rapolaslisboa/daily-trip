import React, { createContext, useState, useEffect } from "react";

// import { service } from "../services/service";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
    //   service.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function signIn(userData) {
    // const response = await service.post("/User/Login", userData);

    // setUser(response.data.profile);
    // service.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

    // sessionStorage.setItem("@App:user", JSON.stringify(response.data.profile));
    // sessionStorage.setItem("@App:token", response.data.accessToken);
  }

  function signOut() {
    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("@App:token");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
