// Busqueda.jsx

export const Busqueda = () => {
    // Eliminamos el estado (useState) y los manejadores de eventos

    return (
        // Contenedor principal: usa flex para alinear el icono y el input
        // La clase 'shadow-md' le da esa sombra sutil de la imagen
        <div className="flex items-center bg-white rounded-lg shadow-md max-w-lg">

            {/* 1. Icono de Lupa (Estático) */}
            {/* px-4 para padding. text-gray-400 para el color del icono */}
            <div className="px-4">
                {/* Asumimos que has importado 'Material Symbols Outlined' o Font Awesome */}
                <span className="material-symbols-outlined text-gray-400">
                    search
                </span>
            </div>

            {/* 2. Campo de Entrada (Estático) */}
            <input
                type="text"
                placeholder="Search student name..."
                // Clases: w-full para ocupar el espacio restante. py-2 para altura. 
                // focus:outline-none para quitar el borde de enfoque.
                className="w-full py-2 pr-4 text-gray-700 placeholder-gray-400 rounded-lg focus:outline-none"
            // No necesita 'value' ni 'onChange' porque es estático.
            />
        </div>
    );
};