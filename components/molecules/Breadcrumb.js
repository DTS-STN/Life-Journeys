import propTypes from "prop-types";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import en from "../../locales/en";
import fr from "../../locales/fr";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-custom-blue-dark text-sm font-body">
        <li className="inline-block min-w-0 max-w-full">
          <Link href={t.gocLink}>
            <a className="hover:text-custom-blue-link visited:text-purple-700 underline">
              Canada.ca
            </a>
          </Link>
        </li>

        {props.items
          ? props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="inline-block min-w-0 max-w-full truncate"
                >
                  <span className="text-gray-dark-100 mx-4">{">"}</span>
                  <Link href={item.link}>
                    <a className="hover:text-custom-blue-link visited:text-purple-700 underline">
                      {item.text}
                    </a>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  /**
   * Array of Items for the breadcrumb
   */
  items: propTypes.arrayOf(
    propTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: propTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: propTypes.string,
    })
  ),
};
