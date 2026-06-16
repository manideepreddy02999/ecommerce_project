import React, { createContext } from "react";

export const AuthContext = createContext();

// const auth = <AuthContext.Provider value={["ddd", "ddd"]}> {this.props.children} </AuthContext.Provider>;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// const Auth = () => {
//   return <div>auth</div>;
// };

// export default Auth;
