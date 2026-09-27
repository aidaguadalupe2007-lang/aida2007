import { useEffect, useState } from "react";
function App() {
  //iniciamos con un estado para un arreglo
  const [elementos, setElementos]=useState([]);

  //crear fuciòn para agregar datos
  const agregarDato=()=>{
    const nuevoNumero=Math.floor(Math.random()*50);
    setElementos([...elementos, nuevoNumero]);
  }

  //Metodo para recorrer el arreglo
  const recorrerArreglo=(elementos, index)=>(
    <li key={index} style={{margin: `5px 0`, fontsize:`18px`}}>
      Elemento #{index+1}: <strong>{elementos}</strong>
    </li>
  )

  //Hook de efecto
  useEffect(()=>{
    console.log("El arreglo de datos actual es: ", elementos);

  },[elementos])

  return (
    <>
      <h1>Mi primer arreglo de datos</h1>
      <div style={{padding:`20px`}}>
        <h2>paso 1. Agregar datos al arreglo</h2>
        <button onClick={agregarDato}>Agregar nùmero aleatorio</button>
        <ul>
          {elementos.map(recorrerArreglo)}

          {/*Si e arreglo esta vasio enviar un mensaje */}


          {elementos.length===0 ? (
            <>
              <p>Aùn no hay elementos en e larreglo</p>
              <p>Preciona el botòn agregar datos</p>
            </>
          ):elementos.map(recorrerArreglo)}
        </ul>
      </div>
    </>
  )
}

export default App

