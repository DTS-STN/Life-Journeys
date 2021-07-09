import propTypes from "prop-types";
import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Layout({
  children,
  title,
  locale,
  bannerTitle,
  bannerText,
}) {
  return (
    <>
      <Meta title={title} />

      <div className="overflow-x-hidden">
        <Header bannerTitle={bannerTitle} bannerText={bannerText} />

        <main>
          <div className="bg-pink-700 text-white font-extrabold pl-8">
            locale is : {locale}{" "}
          </div>
          <div>{children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  // Title of the page
  title: propTypes.string,

  // Current Language
  locale: propTypes.string.isRequired,

  // Banner Text, for sub pages that requires a banner, this variable is required
  bannerTitle: propTypes.string,

  //Child Banner Text, for sub pages that requires a banner
  bannerText: propTypes.string,
};
