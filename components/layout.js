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
        <Header
          locale={locale}
          bannerTitle={bannerTitle}
          bannerText={bannerText}
        />

        <main>
          <div>{children}</div>
        </main>

        <Footer locale={locale} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
  },
});

Layout.defaultProps = {
  language: "en",
};

Layout.propTypes = {
  // Title of the page
  title: propTypes.string,

  // Banner Text, for sub pages that requires a banner, this variable is required
  bannerTitle: propTypes.string,

  //Child Banner Text, for sub pages that requires a banner
  bannerText: propTypes.string,
};
