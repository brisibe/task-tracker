import "./style.css";
import { memo } from "react";

let Footer = () => {
  return (
    <footer>
      <p>
        Designed and built by <b>Joseph</b> <b className="surname">Brisibe</b>
      </p>
    </footer>
  );
};

Footer = memo(Footer);

export default Footer;
