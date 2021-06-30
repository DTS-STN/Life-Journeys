import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />
      <div className="overflow-x-hidden">
        <Header />

        <main>
          <div>{children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
}
