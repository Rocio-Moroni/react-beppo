/* IMPORTS */

// CSS import
import './App.css';
// Components import
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


/* COMPONENTS */

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={ "Welcome" } />
    </div>
  )
};

export default App;
