import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Layout({ children, title }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Meta title={title} />

      <Header />

      <main>
        {children}
        <PageDetails />
      </main>

      <Footer />
    </div>
  );
}
