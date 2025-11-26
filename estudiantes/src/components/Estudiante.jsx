export const Estudiante = ({ estudiante }) => {
 const { image, name, id, attendance } = estudiante; 
  // 💡 2. Accedemos al estado del último registro
  // ----------------------------------------------------
  // a. Obtenemos el índice del último elemento del array 'attendance'
  const ultimoIndice = attendance.length - 1;
  // b. Accedemos al objeto en esa posición y luego a su propiedad 'status'
  const estadoReciente = attendance[ultimoIndice].status;
  const baseButtonClasses = 'px-3 py-1 text-sm font-medium transition-colors duration-150 flex-1';

const getButtonClasses = (estadoDeseado) => {
  // Clases base (siempre se aplican: padding, fuente, tamaño, transición, ancho flexible)
  const baseClasses = 'px-3 py-1 text-sm font-medium transition-colors duration-150 flex-1 border-x border-gray-200';
  // Define las clases de color
  const clasesActivo = 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700';
  const clasesInactivo = 'bg-white text-gray-700 hover:bg-gray-100';
  // Asignamos 'Presente' como el estado activo fijo para esta versión (solo estética)
  const estadoActualFijo = 'Presente'; 
  // Determina las clases de color
  const colorClasses = estadoDeseado === estadoActualFijo ? clasesActivo : clasesInactivo;

  return `${baseClasses} ${colorClasses} `;
};

  return (
    <div>
      <div>
        <div>
          <img
            alt="Avatar"
            src={image}
          />
          <div>
            <p>{name}</p>
            <p>
              {id}
            </p>
          </div>
        </div>
        <span>{estadoReciente}</span>
      </div>


      <div className="flex rounded-lg overflow-hidden border border-gray-200">
        
        {/* Botón Present */}
        <button className={getButtonClasses('Presente')}
        >
          Present
        </button>
        
        {/* Botón Absent */}
        <button
          // LLAMAMOS a la función para obtener todas las clases
          className={getButtonClasses('Ausente')}
        >
          Absent
        </button>
        
        {/* Botón Late */}
        <button
          // LLAMAMOS a la función para obtener todas las clases
          className={getButtonClasses('Tarde')}
        >
          Late
        </button>
        
      </div>
    </div>
  )
}
