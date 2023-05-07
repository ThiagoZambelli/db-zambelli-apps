import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestesCSS from './pages/TestesCSS';
import InicioDB from 'pages/InicioDB';
import ConteudoDB from 'pages/ConteudoDB';
import Inicio from 'pages/Inicio';
import PaginaComum from 'pages/PaginaComum';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaComum />}>
          <Route index element={<Inicio />} />
          <Route path='css' element={<TestesCSS />} />
          <Route path='db' element={<InicioDB />} />
          <Route path='db/conteudo/:id' element={<ConteudoDB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
