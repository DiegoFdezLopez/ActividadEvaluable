import { useState } from "react";
// 💡 Importamos todos los componentes necesarios
import { Estudiante, Estadisticas, Busqueda, Header } from "./components/"; 

import { initialStudents } from './data/students.js';

export function App() {
  
  // NOTA: Aquí podrías añadir lógica de filtrado o de estado global en el futuro

  return (
    // Contenedor principal: fondo claro, altura mínima de pantalla y padding
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      
      {/* 1. Encabezado (Header) */}
      <div className="mb-8">
        {/* Asumo que tienes un componente Header (por ejemplo, el título 'Attendance Dashboard') */}
        {/* <Header /> */} 
      </div>

      {/* 2. Sección Superior: Estadísticas y Búsqueda */}
      {/* Usamos un grid que se divide en 4 columnas en pantallas grandes (lg) */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Estadísticas: ocupan las primeras 3 columnas en pantallas grandes */}
        <div className="lg:col-span-3">
            {/* Le pasamos la lista de estudiantes para que calcule los recuentos */}
            <Estadisticas estudiantes={initialStudents} /> 
        </div>
        
        {/* Búsqueda: ocupa la última columna en pantallas grandes */}
        <div className="lg:col-span-1">
          <Busqueda /> 
        </div>
      </div>
      
      {/* 3. Lista de Estudiantes (Contenedor de Tabla) */}
      {/* Contenedor blanco con esquinas redondeadas y sombra para simular la caja de la tabla */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {
          // Mapeamos la lista de estudiantes para renderizar cada fila
          initialStudents.map((estudiante) => {
            return (
              <Estudiante 
                key={estudiante.id} 
                estudiante={estudiante}
              />
            );
          })
        }
      </div>
    </div>
  );
}