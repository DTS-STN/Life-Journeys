import propTypes from "prop-types";
import Link from "next/link";

/**
 *  Breadcrumb component
 */
export function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className="block text-custom-blue-dark text-sm font-body">
        <li className="inline-block min-w-0 max-w-full">
          <Link href="https://www.canada.ca/">
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
