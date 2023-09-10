import React from "react";
import { createContext, useContext, useState } from "react";

// Create the context
const PageContext = createContext();

// Create a custom hook to access the context
export const usePage = () => {
  return useContext(PageContext);
};

// Create a provider component to wrap your app
export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("recommended");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
