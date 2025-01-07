import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/" element={<Inicio />} />
        </Route>

        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>

    /* 
        Na rota '/', a estrutura a ser renderizada é:

        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na rota '/sobre mim', a estrutura a ser renderizada é:

        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>
      
      */
  );
}

export default App;
