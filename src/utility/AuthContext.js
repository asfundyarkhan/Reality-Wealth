import React, {createContext} from 'react';

const authContext = createContext();

export default authContext;

export const AuthProvider = ({children}) => {
  const [isLoggedin, setIsLoggedin] = React.useState(false);

  const login = () => {
    setIsLoggedin(true);
  };

  const logout = () => {
    setIsLoggedin(false);
  };

  return (
    <authContext.Provider value={{isLoggedin, login, logout}}>
      {children}
    </authContext.Provider>
  );
};
