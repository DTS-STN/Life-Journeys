import { Landscape } from "../atoms/Landscape";
import { WordMark } from "../atoms/Wordmark";

import { PageDetails } from "../organisms/PageDetails";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <footer id="wb-info">
      <PageDetails />

      <div className="w-full ">
        <Landscape />
        <WordMark />
      </div>
    </footer>
  );
}
