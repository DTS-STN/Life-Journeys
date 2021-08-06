import propTypes from "prop-types";
import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import Banner from "./atoms/Banner";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Layout({
  children,
  title,
  bannerText,
  breadcrumbItems,
}) {
  return (
    <>
      <Meta title={title} />

      <div className="overflow-x-hidden">
        <Header breadcrumbItems={breadcrumbItems} />

        <main>
          {/* Display a banner when requested */}
          {bannerText ? <Banner headline={bannerText} /> : ""}
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
  /**
   * Array of Items for the breadcrumb
   */
  breadcrumbItems: propTypes.arrayOf(
    propTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: propTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: propTypes.string,
    })
  ),
};
