import { footerConfig, footerSocialConfig } from "../../data/footerConfig";

const Footer = () => {
  const footerLinks = footerConfig() || [];
  const footerSocial = footerSocialConfig() || [];

  return (
    <footer className="footer">
      <div className="footer--item" data-links="call">
        <p>
          <span>
            Questions? Call
            <a href="tel:000-800-919-1743"> 000-800-919-1743</a>
          </span>
        </p>
      </div>
      {footerLinks.length > 0 && (
        <div className="footer--item" data-links="links">
          <ul className="footer--links">
            {footerLinks.map((link) => (
              <li className="footer--link" key={link.name}>
                {" "}
                <a role="link" target="_self" href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="copyright-text">
        Built by
        {footerSocial
          .filter((link) => link.name !== "GitHub")
          .map((link) => (
            <a
              role="link"
              target="_blank"
              rel="noreferrer"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        . The source code is available on{" "}
        {footerSocial
          .filter((link) => link.name === "GitHub")
          .map((link) => (
            <a
              role="link"
              target="_blank"
              rel="noreferrer"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
      </p>
    </footer>
  );
};

export default Footer;
