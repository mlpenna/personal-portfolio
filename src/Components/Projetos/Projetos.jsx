import "./Projetos.css"

function Projetos() {
    return (
        <>
            <div className="proj-box">
                <div className="proj-img">
                    <img src="./img/proj1.png" alt="Keystry Image" />
                </div>
                <div className="proj-description">
                    <div>
                        <h2 className="proj-name">Keystry</h2>
                        <div className="proj-text">
                            <p>Uma aplicação web que implementa um teste de digitaçao. Realiza o cálculo de palavras por minuto, acurácia, e os apresenta ao final do tempo. A interface da aplicação permite ao usuário visualizar e corrigir de forma intuitiva os erros de digitação.</p>
                        </div>
                        <ul className="proj-tech-list">
                            <li>Reactjs</li>
                            <li>HTML5/CSS3</li>
                            <li>Material UI</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="proj-link-div">
                            <a
                                href="https://github.com/mlpenna/keystry"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-link"
                            >
                                <i className="fa-brands fa-github proj-link-icon"></i>
                            </a>
                            <a
                                href="https://keystry-ecrfk3gw3-mlpenna.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-link"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square proj-link-icon"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            <div className="proj-box">
                <div className="proj-img">
                    <img src="./img/proj2.png" alt="Keystry Image" />
                </div>
                <div className="proj-description">
                    <div>
                        <h2 className="proj-name">Painel de Controle - Kinghost</h2>
                        <div className="proj-text">
                            <p>Aplicação web que implementa um painel de controle para gerenciar as contas de hospedagem web utilizando a API de revenda disponibilizada pela empresa de hospedagem Kinghost</p>
                        </div>
                        <ul className="proj-tech-list">
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>SSR</li>
                            <li>HTML5/CSS3</li>
                        </ul>
                        <div className="proj-link-div">
                            <a
                                href="https://github.com/mlpenna/kinghost-painel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-link"
                            >
                                <i className="fa-brands fa-github proj-link-icon"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}

export default Projetos;