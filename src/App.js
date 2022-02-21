/* IMPORTS */

// CSS import
import './App.css';
// Components import
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// React import
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/* COMPONENTS */

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:id' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;