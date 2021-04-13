import "../icomoon/style.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import LanguageProvider from "../context/languageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
