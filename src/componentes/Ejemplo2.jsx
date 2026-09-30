import {useState} from 'react' 

export default function Ejemplo2() { 
    const [alumnos, setAlumnos] = useState([{id:1,nombre:"Juan",asistencia:1}]) 
    const [nuevoNombre, setNuevoNombre] = useState(""); 

  //Crear primera funciòn 
const agregarAlumno=(e)=>{ 
    e.preventDefault(); 
    if(nuevoNombre.trim()===""){
        alert("Error: Ingresa un nombre");
        return;
    } 
    const nuevoAlumno={ 
        id:Date.now(), 
        nombre:nuevoNombre, 
        asistencia:0 
    } 
    //Introducir valores al arreglo 
    setAlumnos([...alumnos,nuevoAlumno]); 
    setNuevoNombre(""); 
    console.log(alumnos); 
} 

  //Agregar asistencia
    const agregarAsistencia=(id,cantidad)=>{
    const listaActualizada=alumnos.map((alumno)=>
        alumno.id===id
        ? {...alumno,asistencia:alumno.asistencia+cantidad}
        : alumno
    );
    setAlumnos(listaActualizada);
}

  //Eliminar objeto 
    const eliminarObjeto=(id)=>{ 
    const listaFilter=alumnos.filter((alumno)=>alumno.id!==id); 
    setAlumnos(listaFilter); 
}

  //Actualizar objeto
    const actualizarObjeto=(id)=>{
    const nombreNuevo=prompt("Ingresa el nuevo nombre");

    if(nombreNuevo===null || nombreNuevo.trim()===""){
        return;
    }

    const listaActualizada=alumnos.map((alumno)=>
        alumno.id===id
        ? {...alumno,nombre:nombreNuevo}
        : alumno
    );

    setAlumnos(listaActualizada);
}

    return ( 
<div style={{padding:"20px", maxWidth: "800px", margin:"0 auto"}}> 
    <h1>Operaciones con arreglos</h1> 
    {/* Formuluario para agregar los datos */} 
    <form onSubmit={agregarAlumno} style={{marginBottom:"20px"}}> 
        <input type='text' value={nuevoNombre} onChange={(e)=>setNuevoNombre(e.target.value)} placeholder='Ingresa un nombre' style={{padding:"8px 12px", marginRight:"10px", width:"60%"}}/> 
        <button type='submit' style={{padding:"8px 12px", background:"#4CAF50", color:"white", border:"none", cursor:"pointer"}}> 
            Agregar 
        </button> 
    </form> 

    {/* Renderizar la vista */} 
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}> 
        {alumnos.length===0?( 
            <p style={{color:"#999", textAlign:"center"}}> 
            No hay datos que mostrar 
            </p> 
        ):( 
            alumnos.map((alumno)=>( 
                <div key={alumno.id} style={{padding:"10px", border:"1px solid #ccc", borderRadius:"4px", display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                    <div> 
                        <strong>{alumno.nombre}</strong> 
                        <br/> 
                        <span style={{fontSize:"12px", color:"#666"}}>Asistencias: {alumno.asistencia}</span> 
                    </div> 

                    <div>
                        <button onClick={()=>agregarAsistencia(alumno.id,1)}>1</button>
                        <button onClick={()=>agregarAsistencia(alumno.id,2)}>2</button>
                        <button onClick={()=>agregarAsistencia(alumno.id,3)}>3</button>
                        <button onClick={()=>actualizarObjeto(alumno.id)}>Actualizar</button>
                        <button onClick={()=>eliminarObjeto(alumno.id)}>Eliminar</button>
                    </div>
                </div> 
            )) 
        )} 
    </div> 
</div> 
    ) 
}