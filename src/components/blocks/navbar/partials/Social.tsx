import { contactInfo } from "data/icpsContact";

const Social = () => {
  return (
    <li className="nav-item">
      <nav className="nav social social-muted justify-content-end text-end">
        {contactInfo.links.map(({ id, icon, url }) => (
          <a href={url} key={id}>
            <i className={icon} />
          </a>
        ))}
      </nav>
    </li>
  );
};

export default Social;