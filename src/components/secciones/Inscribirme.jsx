import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Inscribirme = () => {

    // Datos Pascuante
    const [nombre_pasc, setNombre_pasc] = useState("");
    const [apellido_pasc, setApellido_pasc] = useState("");
    const [documento_pasc, setDocumento_pasc] = useState("");
    const [nac_pasc, setNac_pasc] = useState("");
    const [obrasocial_pasc, setObrasocial_pasc] = useState("");
    const [afiliado_pasc, setAfiliado_pasc] = useState("");
    const [email_pasc, setEmail_pasc] = useState("");
    const [sexo_pasc, setSexo_pasc] = useState("");
    const [colegio_pasc, setColegio_pasc] = useState("");
    const [colegio_otro_pasc, setColegio_otro_pasc] = useState("");
    const [parrmov_pasc, setParroqmov_pasc] = useState("");
    const [parrmov_otro_pasc, setParroqmov_otro_pasc] = useState("");
    const [enfermedad_pasc, setEnfermedad_pasc] = useState("");
    const [medicamentos_pasc, setMedicamentos_pasc] = useState("");
    const [alimentos_pasc, setAlimentos_pasc] = useState("");
    const [sangre_pasc, setSangre_pasc] = useState("");
    const [tel_pasc, setTel_pasc] = useState("");
    const [pj_pasc, setPj_pasc] = useState("");

    // Datos Tutor 1
    const [nombre_tutor1, setNombre_tutor1] = useState("");
    const [apellido_tutor1, setApellido_tutor1] = useState("");
    const [email_tutor1, setEmail_tutor1] = useState("");
    const [tel_tutor1, setTel_tutor1] = useState("");

    // Datos Tutor 2
    const [nombre_tutor2, setNombre_tutor2] = useState("");
    const [apellido_tutor2, setApellido_tutor2] = useState("");
    const [email_tutor2, setEmail_tutor2] = useState("");
    const [tel_tutor2, setTel_tutor2] = useState("");

    const [orderId, setOrderId] = useState("");

    // Enviar Datos
    const enviarDatos = () => {
        const pascuantes = {
            // Datos Pascuante
            pascuante: {
                nombre_pasc: nombre_pasc,
                apellido_pasc: apellido_pasc,
                documento_pasc: documento_pasc,
                nac_pasc: nac_pasc,
                obrasocial_pasc: obrasocial_pasc,
                afiliado_pasc: afiliado_pasc,
                email_pasc: email_pasc,
                sexo_pasc: sexo_pasc,
                colegio_pasc: colegio_pasc,
                colegio_otro_pasc: colegio_otro_pasc,
                parrmov_pasc: parrmov_pasc,
                parrmov_otro_pasc: parrmov_otro_pasc,
                enfermedad_pasc: enfermedad_pasc,
                medicamentos_pasc: medicamentos_pasc,
                alimentos_pasc: alimentos_pasc,
                sangre_pasc: sangre_pasc,
                tel_pasc: tel_pasc,
                pj_pasc: pj_pasc,
            },
            tutor1: {
                nombre_tutor1: nombre_tutor1,
                apellido_tutor1: apellido_tutor1,
                email_tutor1: email_tutor1,
                tel_tutor1: tel_tutor1,
            },
            tutor2: {
                nombre_tutor2: nombre_tutor2,
                apellido_tutor2: apellido_tutor2,
                email_tutor2: email_tutor2,
                tel_tutor2: tel_tutor2
            }
        };

        const db = getFirestore();
        const pascuantesCollection = collection(db, "pascuantes");
        addDoc(pascuantesCollection, pascuantes).then((snapShot) => {
            setOrderId(snapShot.id);
        })
    }

    return (
        <div className="pb-5 animate__animated animate__zoomIn animate__delay-1s">
            <h1 className="container pt-5 d-flex align-items-center justify-content-center">Datos Personales</h1>
            <div className="container pt-2">
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" onInput={(e) => { setNombre_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" onInput={(e) => { setApellido_pasc(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Documento</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Documento" aria-label="Documento" onInput={(e) => { setDocumento_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Fecha de Nacimiento</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Fecha de Nacimiento" aria-label="Fecha de Nacimiento" onInput={(e) => { setNac_pasc(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Obra Social</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Obra Social" aria-label="Obra Social" onInput={(e) => { setObrasocial_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Número de Afiliado</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Número de Afiliado" aria-label="Número de Afiliado" onInput={(e) => { setAfiliado_pasc(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" onInput={(e) => { setEmail_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Sexo</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setSexo_pasc(e.target.value) }}>
                            <option defaultValue>Ingrese su Sexo</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Colegio</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setColegio_pasc(e.target.value) }}>
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
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Colegio" onInput={(e) => { setColegio_otro_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Parroquia/Movimiento</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setParroqmov_pasc(e.target.value) }}>
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
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Parroquia/Movimiento" onInput={(e) => { setParroqmov_otro_pasc(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Padeces alguna Enfermedad</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setEnfermedad_pasc(e.target.value) }}>
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
                        <input type="text" className="form-control" placeholder="(Especificar otra enfermedad) Especificar Medicamentos/No" aria-label="Especificar Medicamentos" onInput={(e) => { setMedicamentos_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Especificaciones Alimentarias</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Alergias, Intolerancias, etc" aria-label="Especificaciones Alimentarias" onInput={(e) => { setAlimentos_pasc(e.target.value) }} />
                        <label className="pt-2" htmlFor="inputState">Grupo sanguíneo y factor RH</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setSangre_pasc(e.target.value) }}>
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
                        <input type="number" className="form-control" placeholder="Ingrese su Número de teléfono" aria-label="Documento" onInput={(e) => { setTel_pasc(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">¿Habías participado antes Pascua joven?</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setPj_pasc(e.target.value) }}>
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
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" onInput={(e) => { setNombre_tutor1(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" onInput={(e) => { setApellido_tutor1(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Número de Teléfono</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Número de Teléfono" aria-label="Número de Teléfono" onInput={(e) => { setTel_tutor1(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" onInput={(e) => { setEmail_tutor1(e.target.value) }} />
                    </div>
                </div>
            </div >
            <h2 className="container pt-4 d-flex align-items-center justify-content-center">Datos Tutor 2</h2>
            <div className="container">
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" onInput={(e) => { setNombre_tutor2(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" onInput={(e) => { setApellido_tutor2(e.target.value) }} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <label htmlFor="inputState">Número de Teléfono</label>
                        <input type="number" className="form-control" placeholder="Ingrese su Número de Teléfono" aria-label="Número de Teléfono" onInput={(e) => { setTel_tutor2(e.target.value) }} />
                    </div>
                    <div className="col">
                        <label htmlFor="inputState">Email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" aria-label="Obra Social" onInput={(e) => { setEmail_tutor2(e.target.value) }} />
                    </div>
                </div>
            </div >
            <div className="container p-1">
                {orderId ? "" : <input className="btn btn-light mt-4 d-grid mx-auto border" type="submit" value="Enviar" onClick={enviarDatos}></input>}
            </div>
            <div className="container pt-5">
                {orderId ? <div><h2>Felicidades {nombre_pasc} tus datos fueron enviados! Gracias por pre-inscribirte a Pascua Joven!</h2><p>Recuerda presentar los datos solicitados especificados de los Requisitos de Inscripción en la sección principal. En nuestras redes sociales vamos a estar manteniendote al día con el retiro. En la sección "Preguntas Frecuentes" podrás encontrar como contactarnos si tenes algún inconveniente</p></div> : ""}
            </div>
        </div>
    )
}

export default Inscribirme;