import React from 'react';

const ProductoModal = ({ showModal, setShowModal, showUpdateModal, setShowUpdateModal, selectedProducto, setSelectedProducto, handleSave }) => {
  return (
    <div className={`modal fade ${showModal || showUpdateModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal || showUpdateModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedProducto.id ? 'Actualizar Producto' : 'Agregar Producto'}</h5>
            <button type="button" className="btn-close" onClick={() => { setShowModal(false); setShowUpdateModal(false); }}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={selectedProducto.nombre} onChange={(e) => setSelectedProducto({ ...selectedProducto, nombre: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea className="form-control" id="descripcion" rows="3" value={selectedProducto.descripcion} onChange={(e) => setSelectedProducto({ ...selectedProducto, descripcion: e.target.value })}></textarea>
              </div>
                
                
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={() => { setShowModal(false); setShowUpdateModal(false); }}>Cancelar</button>
            <button type="button" className="btn btn-success" onClick={handleSave}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoModal;