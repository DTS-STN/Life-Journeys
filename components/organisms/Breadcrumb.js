import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

/**
 * breadcrumb component
 */

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

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
  return (
    <nav aria-label="breadcrumbs">
      <div>
        <div className="inline">
          <Link href="/">
            <a className="inline">home</a>
          </Link>
        </div>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <div key={breadcrumb.href} className="inline">
              <Link href={breadcrumb.href}>
                <a>
                  {"  "}
                  {breadcrumb.breadcrumb !== "" && (
                    <FontAwesomeIcon icon={faAngleRight} color="#2B4380" />
                  )}
                  {"  "}
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
