import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

function App() {

  return (
    <>
      <Navbar />
      <Section sid={1} sindex={"01"} name={"Sobre"}/>
      <Section sid={2} sindex={"02"} name={"Experiência"}/>
      <Section sid={3} sindex={"03"} name={"Trabalho"}/>
      <Section sid={4} sindex={"04"} name={"Contato"}/>
    </>
  );
}

export default App;
