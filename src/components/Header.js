import logoImage from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="logo" src={logoImage} alt="Around the U.S." />
      </div>
    </header>
  );
}

export default Header;
