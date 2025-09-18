import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// Project context
export const AppContext = createContext();

// Then create a component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  
  const handleLogout = () => {
    setUser(null);
    
  };
  return <AppContext.Provider value={{user, setUser, handleLogout, }}>
    {children}
    </AppContext.Provider>;
};
export default AppProvider;

// then go to main to import the component App provider and wrap <App /> in it
// value = list of the global variables
