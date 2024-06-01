import React, { useState, useEffect } from 'react';
import TablaComponent from './components/TablaComponent';
import ProductoModal from './components/ProductoModal';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState({ id: '', nombre: '', descripcion: '' });

  useEffect(() => {
    fetch('http://localhost/miproyecto/api/api.php')
     .then(response => response.json())
     .then(data => setProductos(data));
  }, []);

  const handleAdd = () => {
    setSelectedProducto({ id: '', nombre: '', descripcion: '' });
    setShowModal(true);
  };

  const handleSave = () => {
    const method = selectedProducto.id? 'PUT' : 'POST';
    fetch('http://localhost/miproyecto/api/api.php', {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedProducto),
    })
     .then(response => response.json())
     .then(() => {
        setShowModal(false);
        setShowUpdateModal(false);
        fetch('http://localhost/miproyecto/api/api.php')
         .then(response => response.json())
         .then(data => setProductos(data));
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Seguro que deseas eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost/miproyecto/api/api.php/${id}`, {
          method: 'DELETE',
        })
       .then(response => response.json())
       .then(() => {
          fetch('http://localhost/miproyecto/api/api.php')
          .then(response => response.json())
          .then(data => setProductos(data));
        });
        Swal.fire('Eliminado!', 'El producto ha sido eliminado correctamente', 'success');
      }
    });
  };

  const handleEdit = (producto) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Seguro que deseas editar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedProducto(producto);
        setShowUpdateModal(true);
      }
    });
  };

  return (
    <div className='container'>
      <h2 className="text-center">Lista de Productos</h2>
      <button className='btn btn-success' onClick={handleAdd}>Agregar</button>
      <TablaComponent productos={productos} handleEdit={handleEdit} handleDelete={handleDelete} />
      <ProductoModal
        showModal={showModal}
        setShowModal={setShowModal}
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        selectedProducto={selectedProducto}
        setSelectedProducto={setSelectedProducto} 
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;