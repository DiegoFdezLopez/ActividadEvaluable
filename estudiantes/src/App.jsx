import { useState } from "react";
import {Estudiante,Estadisticas } from "./components/";

import {initialStudents} from './data/students.js';

export function App() {

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

