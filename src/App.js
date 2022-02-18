/* IMPORTS */

// CSS import
import './App.css';
// Components import
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


/* COMPONENTS */

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={ "Welcome" } />
      <ItemDetailContainer />
    </div>
  )
};

export default App;
