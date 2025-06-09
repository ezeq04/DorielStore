import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path="/" element={<ItemListContainer />} />
        <Route  path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route  path="/detalle/:id" element={<ItemDetail />} />
        <Route  path="/contacto" element={<p>Esta es la sección de contacto</p>} />
        <Route  path="*" element={<Link to="/"><button>Volvé al inicio</button></Link>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;