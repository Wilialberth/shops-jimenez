import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App (){
  const greeting = "Bienvenidos a mi tienda aun en construcción."

  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={greeting} />
      <ItemCount/>
      <ItemDetailContainer />

    </div>
  );
}
export default App;