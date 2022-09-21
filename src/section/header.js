import logoTrem from '../assets/image/logo-head.png'

import '../../src/assets/_header.scss';
import '../../src/assets/_reset.scss';
function Header() { 
  return (


    <header>
    <div className="grid-layout">
      <nav>
        <img
          src={logoTrem} 
          alt="Logo trem"
          />
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
          <li><a href="#s-about">Quem sou</a></li>
          <li>
            <a href="#s-projects">Formação</a>
          </li>
          <li>
            <a href="#s-services">Curriculo</a>
          </li>
          
        </ul>
      </nav>
    </div>
  </header>

  );
}

export default Header;
