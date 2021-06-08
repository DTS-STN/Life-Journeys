import propTypes from "prop-types";
import Link from "next/link";

export function SideMenu({ title, links }) {
  return (
    <div
      id="Sidemenu"
      className="p-4 sticky w-full top-0 block lg:max-w-sm float-left text-white"
    >
      <h2 className="font-bold text-p mb-2">{title}</h2>

      <nav
        id="side-menu"
        className="mt-2 mb-2 mr-4 block"
        aria-label="SideMenu"
      >
        <ul className="list-none">
          {links.map(({ url, text }, index) => (
            <li key={index} className="m-0 p-0">
              <Link href={url} scroll={false}>
                <a
                  className="menuLink text-white"
                  href={url}
                  data-text={`${text}`}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

SideMenu.defaultProps = {
  title: "Quick Navigation",
  links: [
    { url: "#GettingReady", text: "Getting ready" },
    { url: "#LoremIpsun", text: "Lorem ipsun dolor" },
    { url: "#WhenArrives", text: "When your child arrives" },
    { url: "#Consectur", text: "Consectur" },
    { url: "#FinancialSupport", text: "Financial support" },
    { url: "#DolorConsectetur", text: "Dolor consectetur" },
    { url: "#Ipsum", text: "Ipsum" },
  ],
};

SideMenu.propTypes = {
  // Title of the menu
  title: propTypes.string.isRequired,

  // array containing two elements: url and text
  links: propTypes.arrayOf(
    propTypes.shape({
      url: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
    })
  ),
};
