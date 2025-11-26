import React, { useState } from 'react';

export const Estudiante = ({ estudiante }) => {
    // Desestructuración de propiedades del estudiante
    const { image, name, id, attendance } = estudiante;

    // 1. CÁLCULO DEL ESTADO INICIAL (Último registro de asistencia)
    const ultimoIndice = attendance.length - 1;
    // Aseguramos minúsculas para comparaciones consistentes
    const estadoReciente = attendance[ultimoIndice].status.toLowerCase(); 

    // 2. ESTADO LOCAL DE REACT: Rastrea el estado de asistencia actual
    const [asistenciaActual, setAsistenciaActual] = useState(estadoReciente);
    
    // 3. MANEJADOR DE CLIC: Actualiza el estado local
    const handleClick = (nuevoEstado) => {
        setAsistenciaActual(nuevoEstado.toLowerCase());
        console.log(`Estado de ${name} cambiado a: ${nuevoEstado}`);
    }

    // 4. FUNCIÓN DE ESTILOS: Determina el color del botón según el estado
    const getButtonClasses = (estadoDeseado) => {
        
        // Clases para el estado Activo (Morado) y Inactivo (Transparente)
        const clasesActivo = 'bg-indigo-600 text-white shadow-md'; 
        const clasesInactivo = 'bg-transparent text-gray-700'; 
        
        // Comparamos el estado deseado (del botón) con el estado actual (asistenciaActual)
        const colorClasses = estadoDeseado.toLowerCase() === asistenciaActual.toLowerCase() 
            ? clasesActivo 
            : clasesInactivo;

        // Clases de fila/celda: ocupan todo el espacio, centran el texto
        return `py-3 px-4 w-full h-full text-center transition-colors duration-200 ${colorClasses}`;
    };

    return (
        // Contenedor Principal: Fila de tabla con borde inferior y efecto hover
        <div className="flex border-b border-gray-200 items-center hover:bg-gray-50 transition-colors">
            
            {/* 1. Columna de Información del Estudiante (w-1/4) */}
            <div className="flex items-center space-x-3 w-1/4 py-2 px-4">
                <img
                    alt={`Avatar de ${name}`}
                    src={image}
                    className="w-8 h-8 rounded-full object-cover" 
                />
                <div>
                    <p className="font-semibold text-gray-900 leading-tight">{name}</p>
                    <p className="text-xs text-gray-500">{id}</p>
                </div>
            </div>

            {/* 2. Columna de Botones de Asistencia (w-3/4 con divisiones) */}
            <div className="flex w-3/4 h-full divide-x divide-gray-200">
                
                {/* Botón Present */}
                <button
                    className={getButtonClasses('present')}
                    onClick={() => { handleClick('present') }}>
                    Present
                </button>

                {/* Botón Absent */}
                <button
                    className={getButtonClasses('absent')}
                    onClick={() => handleClick('absent')}>
                    Absent
                </button>

                {/* Botón Late */}
                <button
                    className={getButtonClasses('late')}
                    onClick={() => handleClick('late')}>
                    Late
                </button>
            </div>

            {/* 3. Indicador de Estado (w-20 - para el estado de la esquina) */}
            <div className="flex-shrink-0 w-20 text-right pr-4">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded
                    ${asistenciaActual === 'present' ? 'bg-green-100 text-green-700' : 
                      asistenciaActual === 'late' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}
                >
                    {asistenciaActual.charAt(0).toUpperCase() + asistenciaActual.slice(1)}
                </span>
            </div>
        </div>
    );
};