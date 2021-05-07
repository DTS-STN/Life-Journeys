import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "../../context/languageProvider";
import { BreadLink } from "../atoms/BreadLink";
import en from "../../locales/en";
import fr from "../../locales/fr";

/**
 * breadcrumb component
 */

export default function BreadCrumbs() {
  const router = useRouter();

  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();
      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  const countcrumbs = breadcrumbs.length;

  return (
    <nav aria-label="breadcrumbs">
      <div>
        <div className="inline">
          <BreadLink url={t.gocLink} text="Canada.ca" arrow={false} />
        </div>
        {breadcrumbs[0].breadcrumb && (
          <div className="inline">
            <BreadLink url="/" text={t.home} arrow={true} />
          </div>
        )}
        {breadcrumbs.map((breadcrumb, idx) => {
          return (
            <div key={breadcrumb.href} className="inline">
              {idx != countcrumbs - 1 && (
                <BreadLink
                  url={breadcrumb.href}
                  text={t[breadcrumb.breadcrumb]}
                  arrow={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
