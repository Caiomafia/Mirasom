
import './App.css';
import React from 'react';



import Menu from '../src/screens/menu'





const Compras = () => {

  const [count , setcount] = React.useState(10);
function handeclick() {
    setcount(count + 1 )
}

  return <div>
     <button onClick={handeclick}>Comprar {count} </button>
    <p>Total :{count} </p>
    <p>Preço :{count * 250} </p>
  </div>
}



function App() {
  return (
    <div className="App">
       <Menu/>
       <Compras/> 
       
           </div>
  );
}

export default App;
