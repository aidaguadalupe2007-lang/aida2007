import { useEffect, useState } from "react";

function EJEMPLOARREGLOS() {

  // Estado para almacenar números
  const [elementos, setElementos] = useState([]);

  // Función para agregar números
  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 50);

    setElementos([...elementos, nuevoNumero]);
  };

  // Función para recorrer el arreglo
  const recorrerArreglo = (elemento, index) => (
    <li key={index}>
      Elemento #{index + 1}: <strong>{elemento}</strong>
    </li>
  );

  // Se ejecuta cuando cambia el arreglo
  useEffect(() => {
    console.log("El arreglo de datos es:", elementos);
  }, [elementos]);

  return (
    <>
      <h1>Hola a todos</h1>

      <div style={{ padding: "20px" }}>

        <h2>Paso 1. Agregar datos al arreglo</h2>

        <button onClick={agregarDato}>
          Agregar número de datos
        </button>

        <ul>
          {elementos.map(recorrerArreglo)}
        </ul>

      </div>
    </>
  );
}

export default EJEMPLOARREGLOS;