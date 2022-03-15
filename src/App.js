/* IMPORTS */

// CSS import
import './App.css';
// Components import
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationServicesProvider } from './services/notification/NotificationServices';
// React import
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/* COMPONENTS */

const App = () => {

  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/item/:productId' element={<ItemDetailContainer />}/>
                <Route path='/:cart' element={<Cart />}/>
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationServicesProvider>
    </div>
  )
};

export default App;