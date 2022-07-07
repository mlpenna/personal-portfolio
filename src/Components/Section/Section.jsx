import "./Section.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import About from "../About/About";
import Experiencia from "../Experiencia/Experiencia";
import Projetos from "../Projetos/Projetos";
import Contato from "../Contato/Contato";

function Section({ sid, sindex, name }) {

  if (sid == 1) {
    return (
      <div id={sid} className="general-section">
        <SectionHeader sid={sid} sindex={sindex} name={name} />
        <About />
      </div>
    );
  } else if (sid == 2) {
    return (
      <div id={sid} className="general-section">
        <SectionHeader sid={sid} sindex={sindex} name={name} />
        <Experiencia />
      </div>
    );
  }
  else if (sid == 3) {
    return (
      <div id={sid} className="general-section">
        <SectionHeader sid={sid} sindex={sindex} name={name} />
        <Projetos />
      </div>
    );
  }
  else if (sid == 4) {
    return (
      <div id={sid} className="general-section">
        <SectionHeader sid={sid} sindex={sindex} name={name} />
        <Contato />
      </div>
    );
  }

}

export default Section;