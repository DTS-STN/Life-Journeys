import { useState, createContext } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
    window.localStorage.setItem("lang", language === "en" ? "fr" : "en");
  };

  const contextValue = {
    items: {
      language,
      changeLanguage,
    },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
