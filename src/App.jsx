import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/Context';
import Principal from './components/Principal/Principal';
import ModalCart from './components/ModalCart/ModalCart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <ModalCart />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="*" element={<Link to="/"><button>Volvé al inicio</button></Link>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;