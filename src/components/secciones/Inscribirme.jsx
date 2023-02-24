import React from "react";

const Inscribirme = () => {
    return (
        <div className="pb-5 animate__animated animate__zoomIn animate__delay-1s">
            <h1 className="container pt-5 d-flex align-items-center justify-content-center">Datos Personales</h1>
            <div className="container pt-2">
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Documento</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Documento" aria-label="Documento" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Fecha de Nacimiento</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Fecha de Nacimiento" aria-label="Fecha de Nacimiento" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Obra Social</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Obra Social" aria-label="Obra Social" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Número de Afiliado</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Número de Afiliado" aria-label="Número de Afiliado" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Sexo</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Sexo</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Colegio</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Colegio</option>
                            <option>20 de Julio</option>
                            <option>Alfonsina Storni</option>
                            <option>Ballesteros</option>
                            <option>Bella Vista</option>
                            <option>Colegio Salesiano General Belgrano</option>
                            <option>Comercio Nro 1</option>
                            <option>El mirador</option>
                            <option>Escuela Normal Lenguas Vivas Juan Bautista Alberdi</option>
                            <option>Fasta Boisdron</option>
                            <option>Fasta Reina de la Paz</option>
                            <option>Gymnasium  UNT</option>
                            <option>Hermanas Esclavas</option>
                            <option>Inmaculada Concepción</option>
                            <option>Instituto Madre Mercedes Pacheco</option>
                            <option>Instituto Privado Nuestra Señora de la Consolación</option>
                            <option>Instituto San Miguel</option>
                            <option>Instituto Técnico Salesiano Lorenzo Massa</option>
                            <option>Instituto Técnico UNT</option>
                            <option>Liceo Militar General Aráoz de Lamadrid</option>
                            <option>Lola Mora</option>
                            <option>Los Cerros</option>
                            <option>María Auxiliadora</option>
                            <option>María Montessori</option>
                            <option>Nacional</option>
                            <option>Ntra. Señora del Huerto</option>
                            <option>Nuestra Sra. de la Merced del Divino Maestro</option>
                            <option>Presentación de María</option>
                            <option>Pucara</option>
                            <option>Sagrado Corazón</option>
                            <option>San Carlos Borromeo</option>
                            <option>San Francisco</option>
                            <option>San Joaquín</option>
                            <option>San José</option>
                            <option>San Pablo Apóstol</option>
                            <option>San Patricio</option>
                            <option>San Vicente de Paul</option>
                            <option>Santa Catalina</option>
                            <option>Santa Cecilia</option>
                            <option>Santa Rita</option>
                            <option>Santa Rosa</option>
                            <option>Santa Rosa</option>
                            <option>Santo Cristo</option>
                            <option>Tercer Milenio</option>
                            <option>Tulio García Fernández</option>
                            <option>Otro</option>
                        </select>
                        <label className="pt-2" htmlFor="inputState">Si no aparece tu Colegio/Escuela en el campo anterior escribí acá su nombre. Si ya lo pusiste en el campo anterior pone "Listo"</label>
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Colegio" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Parroquia/Movimiento</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Parroquia/Movimiento</option>
                            <option>No Participo</option>
                            <option>Carmelo Joven</option>
                            <option>Hnas. Dominicas </option>
                            <option>Mov. Apóstoles de Lourdes</option>
                            <option>Mov. Familiar Cristiano</option>
                            <option>Mov. FASTA</option>
                            <option>Mov. Schoenstatt</option>
                            <option>Mov. Católico Palestra </option>
                            <option>Mov. Circulo de Juventud</option>
                            <option>Mov. Juvenil Salesiano </option>
                            <option>Mov. Misioneros Lourdistas</option>
                            <option>Mov. de la Palabra</option>
                            <option>Mov. Familiar Cristiano</option>
                            <option>Mov. Focolares</option>
                            <option>Pqia El Santo Cristo</option>
                            <option>Pquia Inmaculada Concepción (SMT)</option>
                            <option>Pquia Ntra Sra del Valle</option>
                            <option>Pquia San Francisco Solano</option>
                            <option>Pquia. Ntra Sra de la Caridad</option>
                            <option>Pquia Espíritu Santo (Ranchillos)</option>
                            <option>Decanato 3</option>
                            <option>Decanato 5</option>
                            <option>Otro</option>
                        </select>
                        <label className="pt-2" htmlFor="inputState">Si no aparece tu Parroquia/Movimiento en el campo anterior escribí acá su nombre. Si ya lo pusiste en el campo anterior pone "Listo"</label>
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Parroquia/Movimiento" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Padeces alguna Enfermedad</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Enfermedad</option>
                            <option>Ninguna</option>
                            <option>Problemas respiratorios</option>
                            <option>Hipertensión arterial</option>
                            <option>Cardiopatías congénitas</option>
                            <option>Diabetes</option>
                            <option>Alergias</option>
                            <option>Otro</option>
                        </select>
                        <label className="pt-2" htmlFor="inputState">Especificar Medicamentos</label>
                        <input type="text" className="form-control" placeholder="(Especificar otra enfermedad) Especificar Medicamentos/No" aria-label="Especificar Medicamentos" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Especificaciones Alimentarias</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Alergias, Intolerancias, etc" aria-label="Especificaciones Alimentarias" />
                        <label className="pt-2" htmlFor="inputState">Grupo sanguíneo y factor RH</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Ingrese su Grupo Sanguineo y factor RH</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>0+</option>
                            <option>0-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                    
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Número de teléfono (Completo) 54381*******</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Número de teléfono" aria-label="Documento" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">¿Habías participado antes Pascua joven?</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>Seleccionar</option>
                            <option>Sí</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
            </div >
            <h2 className="container pt-4 d-flex align-items-center justify-content-center">Datos Tutor 1</h2>
            <div className="container">
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Nombres</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-3">
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
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" />
                    </div>
                </div>
                <div className="row pt-3">
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
                    <input className="btn btn-light mt-4 d-grid mx-auto border" type="submit" value="Enviar"></input>
                </div>
        </div>
    )
}

export default Inscribirme;