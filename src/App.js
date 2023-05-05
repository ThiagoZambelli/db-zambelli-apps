import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestesCSS from './pages/TestesCSS';
import PaginaPadrao from './pages/PaginaPadrao';
import PaginaComumDB from 'pages/PaginaComumDB';
import InicioDB from 'pages/InicioDB';
import ConteudoDB from 'pages/ConteudoDB';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<TestesCSS />} />
        </Route>
        <Route path='/db' element={<PaginaComumDB />}>
          <Route index element={<InicioDB />} />
          <Route path='conteudo/:id' element={<ConteudoDB />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
