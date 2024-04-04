const NavLink: React.FC<{
  visibleSection: string;
  id: string;
  href: string;
  children: any;
}> = ({ visibleSection, id, href, children }) => {
  let isActive = false;

  if (`${visibleSection}-link` === id) {
    isActive = true;
  }

  return (
    <a href={href} id={id} className={isActive ? "active" : undefined}>
      {children}
    </a>
  );
};

export default NavLink;
