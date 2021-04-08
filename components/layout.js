
import { Meta } from "./atoms/Meta"
import { Header } from "./organisms/Header"
import { Footer } from "./organisms/Footer";


export const siteTitle = "Life Journeys";


export default function Layout({ children, siteTitle }) {
  return (
    <div className="w-screen h-screen flex flex-col">

      <Meta title={siteTitle} />

      <Header
        onLanguageClick={languageButtonHandler}
        headerCanadaCaAltText={t("headerCanadaCaAltText")}
        language={language === "fr" ? "English" : "Français"}
        siteTitle={t("siteTitle")}
      />


      <main className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0">
        {children}
      </main>


      <Footer
        contactLink={t("contactLink")}
        contactText={t("contactText")}
        termsAndConditionsLink={t("termsAndConditionsLink")}
        termsAndConditionsText={t("termsAndConditionsText")}
        privacyLink={t("privacyLink")}
        privacyText={t("privacyText")}
        footerCanadaCaAltText={t("footerCanadaCaAltText")}
        links={[
          {
            link: t("departmentAndAgenciesLink"),
            linkText: t("departmentAndAgenciesText"),
          },
          {
            link: t("publicServiceAndMilitaryLink"),
            linkText: t("publicServiceAndMilitaryText"),
          },
          {
            link: t("newsLink"),
            linkText: t("newsText"),
          },
          {
            link: t("treatiesLawsAndRegulationLink"),
            linkText: t("treatiesLawsAndRegulationText"),
          },
          {
            link: t("governmentWideReportingLink"),
            linkText: t("governmentWideReportingText"),
          },
          {
            link: t("howGovernmentWorksLink"),
            linkText: t("howGovernmentWorksText"),
          },
        ]}
      />

    </div>
  );
}
