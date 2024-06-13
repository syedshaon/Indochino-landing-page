import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-center p-10">
      <p className="flex justify-center gap-5 text-2xl">
        <a title="facebook" href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a title="Twitter" href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a title="Instagram" href="https://www.instagram.com/">
          <FaInstagramSquare />
        </a>
      </p>
      <p className="text-xl mt-4">copyright 2006-2021 Indochino Inc. All rights reserved</p>
    </div>
  );
};

export default Footer;