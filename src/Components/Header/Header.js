import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="img-round"
        src="img/profile-picture.jpg"
        alt="foto perfil"
      />
      <div className="header-about">
        <h1>Olá,</h1>
        <p>
          Sou um profissional da TI com com +1 ano de experiêcia em
          desenvolvimento de software full stack (<b>React</b>, <b>Go</b>,
          <b>Python</b>), e +4 anos de experiência em outras áreas da TI. Possuo
          graduação em Engenharia Elétrica com certificação em Ciência da
          Computação pela UFMG (2017) e especialização em Gestao de Projetos
          pela Rice University (2019). Atualmente, desenvolvendo softwares e
          soluções de forma independente na minha pŕopria empresa,
          <b>Accurati</b>, e atuando como consultor externo de TI na
          <b>PCP Telecom</b>. No momento, alocado em um cliente de grande porte,
          global, da indústria química/alimentícia.
        </p>
      </div>
    </div>
  );
}

export default Header;
