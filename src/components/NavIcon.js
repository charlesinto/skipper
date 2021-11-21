const NavIcon = (props) => {
  return (
    <section className="nav-icon">
      {props.children}
      {props.count && (
        <section className="nav-icon-count">
          <span>{props.count}</span>
        </section>
      )}
    </section>
  );
};

export default NavIcon;
