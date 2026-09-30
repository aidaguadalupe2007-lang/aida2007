import { useState } from "react";

export default function Ejemplo2() {
const [alumnos, setAlumnos] = useState([
{id: 1,nombre: "Juan",asistencia: 1}]);

const [nuevoNombre, setNuevoNombre] = useState("");

// Agregar alumno
const agregarAlumno = (e) => {
e.preventDefault();
if (nuevoNombre.trim() === "") return;
const nuevoAlumno = {
id: Date.now(),
nombre: nuevoNombre,
asistencia: 0
};

setAlumnos([...alumnos, nuevoAlumno]);
setNuevoNombre("");
};

// Eliminar objeto
const eliminarObjeto = (id) => {
const listaFilter = alumnos.filter((alumno) => alumno.id !== id);
setAlumnos(listaFilter);
};

// Agregar asistencia
const agregarAsistencia = (id, cantidad) => {
const nuevaLista = alumnos.map((alumno) =>
alumno.id === id? {...alumno,asistencia: alumno.asistencia + cantidad}: alumno
);

setAlumnos(nuevaLista);
};

// Actualizar nombre
const actualizarAlumno = (id) => {
const nombreNuevo = prompt("Ingresa el nuevo nombre:");
if (!nombreNuevo) return;
const nuevaLista = alumnos.map((alumno) =>
alumno.id === id? {...alumno,nombre: nombreNuevo}: alumno);

setAlumnos(nuevaLista);
};

return (
<div style={{padding: "20px",maxWidth: "800px",margin: "0 auto", background:"#f5f5f5", minHeight:"100vh"}}>
<h1>Operaciones con arreglos</h1>
{/* Formulario para agregar los datos */}
<form onSubmit={agregarAlumno}style={{ marginBottom: "20px" }}>
<input type="text" value={nuevoNombre}onChange={(e) =>setNuevoNombre(e.target.value)}placeholder="Ingresa un nombre"style={{padding: "8px 12px",marginRight: "10px",width: "60%"}}/>
 
<button type='submit' style={{padding:"8px 12px", background:"#4CAF50", color:"white", border:"none", cursor:"pointer"}}>
            Agregar
        </button>
    </form>
 
{/* Mostrar alumnos */}
<div style={{display: "flex",flexDirection: "column",gap: "10px"}}>
{alumnos.length === 0 ? (
<p style={{color: "#999",textAlign: "center"}}>No hay datos que mostrar</p>) : (
alumnos.map((alumno) => (
<div
key={alumno.id}
style={{padding: "10px",border: "1px solid #ccc",borderRadius: "4px",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
<div>
<strong>{alumno.nombre}</strong>
<br />
<span
style={{fontSize: "12px",color: "#666"}}>
Asistencias: {alumno.asistencia}
</span>
<div style={{ marginTop: "10px" }}>
<button
onClick={() =>
agregarAsistencia(alumno.id, 1)
}>
+1
</button>
<button onClick={() =>
agregarAsistencia(alumno.id, 2)
}>
+2
</button>
<button
onClick={() =>agregarAsistencia(alumno.id, 3)
}>
+3
</button>
</div>
</div>
<div>
<button onClick={() =>actualizarAlumno(alumno.id)
}
style={{background: "blue",color: "white",border: "none",padding: "5px 10px",marginRight: "5px",cursor: "pointer"}}>
Actualizar
</button>
<button onClick={() =>eliminarObjeto(alumno.id)}style={{background: "red",color: "white",border: "none",padding: "5px 10px",cursor: "pointer"}}>
Eliminar
</button>
</div>
</div>
))
)}
</div>
</div>
);
}