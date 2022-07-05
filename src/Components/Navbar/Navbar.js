import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="nav-name text-header">Matheus Penna</div> */}
      <div className="nav-menu">
        <div className="nav-menu-item">
            <span className="menu-item-accent">01.</span> Sobre
        </div>
        <div className="nav-menu-item">
            2. Experiência
        </div>
        <div className="nav-menu-item">
            3. Trabalho
        </div>
        <div className="nav-menu-item">
            4. Contato
        </div>

      </div>
      <div className="nav-links">
        <div className="nav-link-div">
          <a
            href="https://github.com/mlpenna"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="fa-brands fa-github-square fa-2x nav-icon"></i>
          </a>
        </div>
        <div className="nav-link-div">
          <a
            href="https://www.linkedin.com/in/mlanzapenna/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <i className="fa-brands fa-linkedin fa-2x nav-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
