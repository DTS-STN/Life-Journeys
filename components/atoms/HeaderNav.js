import React from "react";

class HeaderNav extends React.Component {
  render() {
    return (
      <nav
        className="gcweb-v2 gcweb-menu wb-init gcweb-menu-inited"
        typeof="SiteNavigationElement"
        id="wb-auto-2"
      >
        <div className="container">
          <h2 className="wb-inv">Menu</h2>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
          >
            <span className="wb-inv">Main </span>Menu{" "}
            <span className="expicon glyphicon glyphicon-chevron-down"></span>
          </button>
          <ul
            role="menu"
            aria-orientation="vertical"
            data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-en.html"
            className="wb-init wb-data-ajax-replace-inited"
            id="wb-auto-3"
          >
            <li role="presentation">
              <a
                role="menuitem"
                tabindex="-1"
                aria-haspopup="true"
                aria-controls="gc-mnu-jobs"
                aria-expanded="false"
                href="#"
              >
                Items here{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
