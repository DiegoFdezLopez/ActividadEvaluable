import React from 'react';

// Este componente recibirá la lista completa de estudiantes (initialStudents)
export const Estadisticas = ({ estudiantes }) => {
  
  // 1. Lógica para calcular los recuentos
  const totalEstudiantes = estudiantes.length;

  // Obtenemos el estado más reciente de cada estudiante
  const estadosRecientes = estudiantes.map(estudiante => {
    // Asumimos la misma lógica que usamos en Estudiante.jsx para obtener el último estado
    const ultimoIndice = estudiante.attendance.length - 1;
    return estudiante.attendance[ultimoIndice].status.toLowerCase();
  });

  // Contamos las ocurrencias de cada estado
  const recuentoPresente = estadosRecientes.filter(s => s === 'present' || s === 'presente').length;
  const recuentoAusente = estadosRecientes.filter(s => s === 'absent' || s === 'ausente').length;
  const recuentoTarde = estadosRecientes.filter(s => s === 'late' || s === 'tarde').length;

  // 2. Función para renderizar una tarjeta de estadística
  const EstadisticaCard = ({ titulo, valor, colorClasses }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <p className="text-gray-500 text-sm font-medium">{titulo}</p>
      {/* Aplicamos las clases de color solo al número */}
      <p className={`text-4xl font-bold mt-2 ${colorClasses}`}>
        {valor}
      </p>
    </div>
  );

  return (
    // Contenedor principal para las 4 tarjetas (Grid)
    // grid-cols-2 en móvil, grid-cols-4 en pantallas medianas y grandes
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      {/* Tarjeta 1: Total Students (Negro) */}
      <EstadisticaCard
        titulo="Total Students"
        valor={totalEstudiantes}
        colorClasses="text-gray-900" 
      />

      {/* Tarjeta 2: Present (Verde) */}
      <EstadisticaCard
        titulo="Present"
        valor={recuentoPresente}
        colorClasses="text-green-500"
      />

      {/* Tarjeta 3: Absent (Rojo) */}
      <EstadisticaCard
        titulo="Absent"
        valor={recuentoAusente}
        colorClasses="text-red-500"
      />

      {/* Tarjeta 4: Late (Amarillo/Naranja) */}
      <EstadisticaCard
        titulo="Late"
        valor={recuentoTarde}
        colorClasses="text-yellow-600"
      />
    </div>
  );
};