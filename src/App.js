import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestesCSS from './pages/TestesCSS';
import PaginaPadrao from './pages/PaginaPadrao';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<TestesCSS />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
