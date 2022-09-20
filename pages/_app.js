import "../styles/globals.css";
import "../styles/forms.css";
import LanguageProvider from "../context/languageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
