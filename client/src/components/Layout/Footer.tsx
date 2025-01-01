import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto w-full py-4 text-center text-white/[38%]">
      <p>Copyright Jakub Zieliński 2024-2025</p>

      <Link to="/privacy" className="underline">
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
