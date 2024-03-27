const Formulario = () =>{
    return (
        <div className="col-md-5 mt-2">
            <form action="">
                    <div className="card">
                    <div className="card-header">
                    Formulario
                    </div>
                    <div className="card-body">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Documento</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Documento" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Nombre</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Apellido</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Teléfono</span>
                                            </div>
                                            <input type="tel" className="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Correo</span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="d-grid">
                                            <input type="submit" className="btn btn-success"/>
                                            <input type="reset" className="btn btn-info mt-2"/>
                                        </div>
                                        
                    </div>
                </div>
            </form>
          
          </div>
        
    )
}

export default Formulario;