import { useState } from "react";
import { Counter,Footer,Header } from "./components";


export default function App() {
  const [name,setName] = useState("Ivan");

  // Puedo agregar mas funciones dentro de una funcion 

  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre");
    setName(newName);
  };


  return (
    <>
      <Header />
      <h1>Mi primer componente {name}</h1>
      <button onClick={changeName}>Cambiar nombre</button>
      <hr />
      <Counter />
      <Footer />
      </>
  );
}

