import "./Experiencia.css"
import { useState } from "react"

function Experiencia() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleOnClick = (e) => {
    setSelectedTab(e.target.id);
    // console.log(e.target.id);
  }

  return (
    <div className="exp-table">
      <div className="exp-table-menu exp-table-section">
        <ul className="exp-table-list">
          <li id="0" onClick={handleOnClick} className={`table-list-elem ${selectedTab == 0  ? "e-active" : ""}`}>Accurati</li>
          <li id="1" onClick={handleOnClick} className={`table-list-elem ${selectedTab == 1  ? "e-active" : ""}`}>PCP Telecom</li>
        </ul>
      </div>
      <div className="exp-table-tab exp-table-section">
        {(() => {
          if (selectedTab == 0) {
            return (
              <ul>
                <h3 className="tab-title">Desenvolvedor de Software (PJ) - Accurati</h3>
                <h4 className="tab-date">2020 - Presente</h4>
                <li>Desenvolvi e mantive um software para registro de laudos de análise da qualidade utilizado em fábrica alimentícia de médio porte usando Reactjs, Go e PostgreSQL.</li>
                <li>Elaborei e implementei diversos pipelines de dados para extração de dados de um ERP de produçao industrial para alimentar o processo de BI do cliente. Tecnologias utilizadas: Python e Go.</li>
                <li>Automatizei o processo de monitoramento e manutençao das caixas de e-mail dos clientes de uma empresa de hospedagem web.</li>
              </ul>
            )
          } else if (selectedTab == 1) {
            return (
              <ul>
                <h3 className="tab-title">Consultor externo de TI - PCP Telecom</h3>
                <h4 className="tab-date">2017 - Presente</h4>
                <li>Trabalhei alocado como Site Tech Lead em uma planta de cliente internacional (International Flavors and Fragances) de grande porte.</li>
                <li>Participei do planejamento e execução de projetos de alta complexidade de integração de sistemas durante processo de M&A das duas empresas.</li>
                <li>Em conjunto com a equipe global do cliente, participei de todo o processo de integraçao de processos e sistemas de TI do cliente. Incluindo colaboração (O365, Teams, Sharepoint, etc.); Infraestrutura (Rede local, SDWAN, servidores); Gestão de endpoints (VMware Workspace One, Intune).</li>
                <li>Prestei suporte aos usuários da planta em que estava alocado.</li>

              </ul>
            )
          } else if (selectedTab == 2) {
            return (
              <ul>
                <h3 className="tab-title">Consultor externo de TI - PCP Telecom</h3>
                <li>tab3</li>
                <li>dkaspkdpoakdopks</li>
                <li>dkoaskdoapksdopaskd</li>
                <li>dasjdajdiojsaioj</li>
              </ul>
            )
          }
        })()}

      </div>
    </div>
  );
}

export default Experiencia;