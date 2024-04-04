import NavLink from "./UI/NavLink";

const Navbar: React.FC<{ visibleSection: string }> = ({ visibleSection }) => {
  return (
    <nav className="primary-nav primary-nav__pull-right">
      <ul>
        <li>
          <NavLink
            visibleSection={visibleSection}
            href="#our-beginning"
            id="our-beginning-link"
          >
            Our Beginning
          </NavLink>
        </li>
        <li>
          <NavLink
            visibleSection={visibleSection}
            href="#features"
            id="features-link"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            visibleSection={visibleSection}
            href="#testimonials"
            id="testimonials-link"
          >
            Testimonials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
