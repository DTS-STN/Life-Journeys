import { Landscape } from "../atoms/Landscape";
import { WordMark } from "../atoms/Wordmark";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="par iparys_inherited">
      <div className="global-footer">
        <footer id="wb-info">
          <Landscape />
          <WordMark />
        </footer>
      </div>
    </div>
  );
}
