import { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

function App() {

  const sectionAbout = useRef(null);
  const sectionExp = useRef(null);
  const sectionProj = useRef(null);
  const sectionContato = useRef(null);

  return (
    <>
      <Navbar sectionAbout={sectionAbout} sectionExp={sectionExp} sectionProj={sectionProj} sectionContato={sectionContato} />
      <Section ref={sectionAbout} sid={"1"} sindex={"01"} name={"Sobre Mim"} />
      <Section ref={sectionExp} sid={"2"} sindex={"02"} name={"Experiência"} />
      <Section ref={sectionProj} sid={"3"} sindex={"03"} name={"Projetos"} />
      <Section ref={sectionContato} sid={"4"} sindex={"04"} name={"Contato"} />
    </>
  );
}

export default App;
