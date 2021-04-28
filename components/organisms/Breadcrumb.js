import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { LanguageContext } from "../../context/languageProvider";
import en from "../../locales/en";
import fr from "../../locales/fr";

/**
 * breadcrumb component
 */

export default function BreadcrumbsReact(props) {
  const router = useRouter();
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

  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;
  return (
    <nav aria-label="breadcrumbs">
      <div>
        <div className="inline">
          <Link href="/">
            <a className="inline">{t.home}</a>
          </Link>
        </div>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <div key={breadcrumb.href} className="inline">
              <Link href={breadcrumb.href}>
                <a>
                  {"  "}
                  {breadcrumb.breadcrumb && (
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      size="sm"
                      color="#2B4380"
                    />
                  )}
                  {"  "}
                  {t[breadcrumb.breadcrumb]}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
