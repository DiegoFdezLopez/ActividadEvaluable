import {Estudiante,Estadisticas } from "./components/";

import {initialStudents} from './data/students.js';

export function App() {

  const handleClick =()=>{
    
  }

  return (
    <div className="row mt-5">
      {
        initialStudents.map((estudiante)=>{
          return <Estudiante key={estudiante.id} estudiante={estudiante}/>
        })
      }
    </div>
    
  );
}

