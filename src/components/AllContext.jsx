import { createContext, useState } from "react";

// Create the context
const AllContext = createContext();

// Create a provider component
const AllContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <AllContext.Provider value={{ toggle, setToggle }}>
      {children}
    </AllContext.Provider>
  );
};

export { AllContext, AllContextProvider };
