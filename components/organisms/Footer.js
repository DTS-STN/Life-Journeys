import { Landscape } from "../atoms/Landscape";
import { WoodMark } from "../atoms/Woodmark";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="par iparys_inherited">
      <div className="global-footer">
        <footer id="wb-info">
          <Landscape />
          <WoodMark />
        </footer>
      </div>
    </div>
  );
}
