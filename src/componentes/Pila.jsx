import { useState } from "react";

function Pila() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Agregar valores a la pila del arreglo
  const handlePush = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setStack([inputValue, ...stack]);
    setInputValue("");
  };

  // Eliminar el elemento que está en el tope de la pila
  const handlePop = () => {
    if (stack.length === 0) return;

    // Eliminar el elemento del tope de la pila
    const nuevoStack = stack.slice(1);
    setStack(nuevoStack);
  };

  // Obtener el elemento que está en el tope
  const elementoTope =
    stack.length > 0 ? stack[0] : "La pila está vacía";

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2>Visualizar los datos de la pila</h2>

      <form onSubmit={handlePush}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un dato"
        />

        <button type="submit">
          Push
        </button>
      </form>

      <h3>Tope de la pila:</h3>
      <p>{elementoTope}</p>

      <button onClick={handlePop}>
        Pop
      </button>

      <h3>Elementos de la pila:</h3>

      <ul>
        {stack.map((elemento, index) => (
          <li key={index}>
            {elemento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pila;