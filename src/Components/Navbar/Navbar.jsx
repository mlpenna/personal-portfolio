import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="nav-name text-header">Matheus Penna</div> */}
      <div className="nav-menu">
        <div className="nav-menu-item">
          <button>
            <span className="menu-item-accent">01.</span> Sobre
          </button>
        </div>
        <div className="nav-menu-item">
          <button>
            <span className="menu-item-accent">02.</span> Experiência
          </button>
        </div>
        <div className="nav-menu-item">
          <button>
            <span className="menu-item-accent">03.</span> Trabalho
          </button>
        </div>
        <div className="nav-menu-item">
          <button>
            <span className="menu-item-accent">04.</span> Contato
          </button>
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
