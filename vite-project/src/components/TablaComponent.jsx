import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const TablaComponent = ({ productos, handleEdit, handleDelete }) => {
  return (
    <div className='container ps-0'>
    <table className="table table-bordered text-center">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>
              <button style={{backgroundColor:'white'}} onClick={() => handleEdit(producto)}><CiEdit style={{color:'black'}}/></button>{' '}
              <button style={{backgroundColor:'white'}} onClick={() => handleDelete(producto.id)}><AiFillDelete style={{color:'red'}} /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TablaComponent;