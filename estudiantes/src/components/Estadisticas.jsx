import React from 'react'

export const Estadisticas = () => {
  return (


    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">


      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Total Students</p>
        <p className="text-4xl font-bold mt-1">32</p>
      </div>


      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Present</p>
        <p className="text-4xl font-bold mt-1 text-green-500">28</p>
      </div>


    </div>
  );
};

