import "./About.css";

function About() {
  return (
    <>
      <div className="about-main">
        <div className="about-text">
          <p>
            Sou um profissional da TI com &gt; 1 ano de experiêcia em
            desenvolvimento de software full stack (<b>ReactJS, .NET 6.0, C#, Go</b>), e &gt; 4 anos de experiência em outras áreas da TI (<b>SysAdmin, Infraestrutura, Suporte, Projetos</b>).
          </p>
          <p>
            Possuo graduação em Engenharia Elétrica com certificação em Ciência da
            Computação pela UFMG (2017) e especialização em Gestao de Projetos
            pela Rice University (Houston - TX - 2019).
          </p>
          <p>
            Atualmente, desenvolvo softwares e soluções de forma independente
            na minha pŕopria empresa, <b>Accurati</b>, e atuo como consultor externo de TI na <b>PCP Telecom</b>. No momento, alocado em um cliente de grande porte (<b>IFF - International Flavors and Fragances</b>),
            global, da indústria química/alimentícia.
          </p>
          <p>Algumas tecnologias que tenho utilizado recentemente:</p>
          <div>
            <ul className="about-tech-list">
              <li>HTML5/CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>.NET 6.0/C#</li>
              <li>Go</li>
            </ul>
          </div>
        </div>
        <img
          className="about-img"
          src="./img/profile-picture.jpg"
          alt="foto perfil"
        />
      </div>

    </>
  );
}

export default About;
