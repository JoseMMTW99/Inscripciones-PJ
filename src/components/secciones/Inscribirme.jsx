import React from "react";

const Inscribirme = () => {
    return (
        <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 className="container pt-5 d-flex align-items-center justify-content-center">Datos Personales</h1>
            <div className="container pt-2">
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Documento</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Documento" aria-label="Documento" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Fecha de Nacimiento</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Fecha de Nacimiento" aria-label="Fecha de Nacimiento" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Obra Social</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Obra Social" aria-label="Obra Social" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Número de Afiliado</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Número de Afiliado" aria-label="Número de Afiliado" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Sexo</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Sexo</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Colegio</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Colegio" aria-label="Colegio" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Parroquia/Movimiento</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Parroquia/Movimiento" aria-label="Parroquia/Movimiento" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Especificaciones Alimentarias</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Alergias, Intolerancias, etc" aria-label="Especificaciones Alimentarias" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Padeces alguna enfermedad</label>
                        <input type="text" className="form-control" placeholder="¿Cual? Especificar Medicamentos" aria-label="Padeces alguna enfermedad" />
                    </div>
                </div>
            </div >
            <h2 className="container pt-4 d-flex align-items-center justify-content-center">Datos Tutor 1</h2>
            <div className="container">
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Ingrese sus Nombres</label>
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Número de Teléfono</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Número de Teléfono" aria-label="Número de Teléfono" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" />
                    </div>
                </div>
            </div >
            <h2 className="container pt-4 d-flex align-items-center justify-content-center">Datos Tutor 2</h2>
            <div className="container">
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col">
                        <label htmlFor="inputState">Número de Teléfono</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Número de Teléfono" aria-label="Número de Teléfono" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" />
                    </div>
                </div>
            </div >
            <div className="container p-1">
                    <input className="btn btn-primary mt-4 d-grid col-1 mx-auto" type="submit" value="Enviar"></input>
                </div>
        </div>
    )
}

export default Inscribirme;