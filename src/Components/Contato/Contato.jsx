import "./Contato.css"

function Contato() {
    return (
        <div className="contato-box">
            <div className="contato-text"><p>No momento, estou aberto para oportunidades na área de desenvolvimento de software JR/PL. Podendo atuar tanto em backend (.NET/C#, Go), quanto em frontend (ReactJS). Para entrar em contato, basta me enviar um e-mail pelo botão abaixo (ou, se preferir, pelo Linkedin).</p></div>
            <a target="_blank" rel="noopener noreferrer" href="mailto:matheus.lanza.penna@outlook.com" className="email-button">Dê um oi!</a>
            <div className="contato-footer">Desenvolvido por <a className="footer-link-accent" href="http://https://github.com/mlpenna">mim</a>. Inspirado <a className="footer-link-accent" href="https://brittanychiang.com/">neste</a> portfolio.</div>
        </div>
    );
}

export default Contato;