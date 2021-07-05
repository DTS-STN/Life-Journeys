import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Layout({ children, title, locale }) {
  return (
    <>
      <Meta title={title} />
      <div className="overflow-x-hidden">
        <Header locale={locale} />

        <main>
          <div>{children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
  },
});
