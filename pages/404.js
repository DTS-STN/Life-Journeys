import Head from "next/head";
import Link from "next/link";
import ReportProblem from "../components/atoms/ReportProblem";
import { ActionButton } from "../components/atoms/ActionButton";

export default function error404() {
  return (
    <>
      <div className="min-h-screen relative">
        <Head>
          <title>404 — Having a Child</title>
        </Head>
        <section className="layout-container pb-44">
          <img
            className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
            src={"/images/sig-blk-en.svg"}
            alt={"Government of Canada"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  We couldn't find that page
                </h1>
                <p className="font-bold font-body mb-8">Error 404</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  We're sorry you ended up here. Sometimes a page gets moved or
                  deleted, but hopefully we can help you find what you're
                  looking for.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {"Return to the "}
                    <Link href="/">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        Having a Child page
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <ReportProblem language={"en"} />
            </div>
            <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
              <img
                className="w-68px xl:w-24"
                src="/images/crackedbulb.svg"
                alt="Cracked lightbulb"
              />
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1 className="font-bold font-display mb-4">
                  Nous ne trouvons pas cette page
                </h1>
                <p className="font-bold font-body mb-8">Erreur 404</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  Nous sommes désolés que vous ayez abouti ici. Il arrive
                  parfois qu'une page ait été déplacée ou supprimée.
                  Heureusement, nous pouvons vous aider à trouver ce que vous
                  cherchez.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {"Retour à la "}
                    <Link href="/fr">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        page "Avoir un enfant"
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <ReportProblem language="fr" />
            </div>
          </div>
        </section>
        <footer className="h-100px w-screen bg-footer-background-color absolute bottom-0">
          <div className="layout-container flex justify-between lg:flex-row-reverse pt-4 lg:pt-0 lg:mt-8">
            <ActionButton
              id="404TopOfPageButton"
              href="#"
              custom="text-left w-32 flex flex-col lg:hidden"
              text="Top of page / Haut de la page"
              icon="icon-up-caret"
              iconEnd
            />
            <img
              className="h-6 w-auto lg:h-auto lg:w-40"
              src="/images/wmms-blk.svg"
              alt="Canada"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
