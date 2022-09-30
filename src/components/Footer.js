import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Mesto Russia
      </div>
    </footer>
  );
}

export default Footer;
