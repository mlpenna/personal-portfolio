import "./Section.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import About from "../About/About";

function Section({ sid, sindex, name }) {
  return (
    <div id={sid} className="general-section">
      <SectionHeader sid={sid} sindex={sindex} name={name} />
      <About />
    </div>);
}

export default Section;