const Navbar = ({ logo }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/emergency-numbers">Emergency Numbers</a></li>
        <li><a href="/documents">Documents</a></li>
        <li><a href="/nearbyhospitals">Nearby Hospitals</a></li>
      </ul>
      <div className="logo">
        <img src={logo} alt="First Aid Logo" />
      </div>
    </nav>
  );
};

export default Navbar;

