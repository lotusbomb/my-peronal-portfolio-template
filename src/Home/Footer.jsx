import React from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/iamonyinye_chi"
                className="socio-icon"
              ><FaInstagramSquare /></a>
            </li>
            <li>
              <a
                href="https://x.com/iamonyinye_chi"
                className="socio-icon"
              ><FaSquareXTwitter /></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/onyinye-favour/"
                className="socio-icon"
              ><FaLinkedin/>
              </a>
            </li>
          </ul>
        </div>
        <div className="texts">
          <p>&copy; 2024 Lotus. All rights reserved.</p>
          <p>Designed & Built by Onyinyechi Favour</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
