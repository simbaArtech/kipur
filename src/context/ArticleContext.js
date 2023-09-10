import React, { createContext, useContext, useState } from "react";

// Create the context
const ArticleContext = createContext();

// Create a custom hook to access the context
export const useArticle = () => {
  return useContext(ArticleContext);
};

// Create a provider component to wrap your app
export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState("recommended");

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
