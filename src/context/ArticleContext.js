import React, { createContext, useContext, useState } from "react";

const ArticleContext = createContext(null);

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }
  return context;
};

export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
