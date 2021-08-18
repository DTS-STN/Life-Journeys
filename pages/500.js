import Head from "next/head";
import Link from "next/link";
import ReportProblem from "../components/atoms/ReportProblem";
import { ActionButton } from "../components/atoms/ActionButton";

export default function error500(props) {
  return (
    <>
      <div className="min-h-screen relative">
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
                  The web site has reported an error. Please try again later.
                </h1>
                <p className="font-bold font-body mb-8">Error 500</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  It may be due to server trouble or an incorrect or expired
                  URL. If the problem persists, report the problem.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Return to the &nbsp;
                    <Link href="/">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        Life Journeys page
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
                  Le site Web a signalé une erreur. Veuiller réessayer plus
                  tard.
                </h1>
                <p className="font-bold font-body mb-8">Erreur 500</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  Cela peut être dû à un problème de serveur ou à une URL
                  incorrecte ou expirée. Si le problème persiste, signalez-le.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Retournez à la &nbsp;
                    <Link href="/fr">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        page d'accueil des parcours de vie
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
