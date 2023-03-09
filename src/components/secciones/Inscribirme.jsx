import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Inscribirme = () => {

    // Datos Inscripto
    const [nombre_insc, setNombre_insc] = useState("");
    const [apellido_insc, setApellido_insc] = useState("");
    const [nac_insc, setNac_insc] = useState("");
    const [documento_insc, setDocumento_insc] = useState("");
    const [sexo_insc, setSexo_insc] = useState("");
    const [email_insc, setEmail_insc] = useState("");
    const [tel_insc, setTel_insc] = useState("");
    const [colegio_insc, setColegio_insc] = useState("");
    const [colegio_otro_insc, setColegio_otro_insc] = useState("");
    const [año_insc, setAño_insc] = useState("");
    const [parrmov_insc, setParroqmov_insc] = useState("");
    const [parrmov_otro_insc, setParroqmov_otro_insc] = useState("");
    const [pj_insc, setPj_insc] = useState("");
    const [obrasocial_insc, setObrasocial_insc] = useState("");
    const [afiliado_insc, setAfiliado_insc] = useState("");
    const [sangre_insc, setSangre_insc] = useState("");
    
    const [checkboxStateEnfermedades, setcheckboxStateEnfermedades] = useState({
        Ninguna: false,
        ProblemasRespiratorios: false,
        HipertensionArterial: false,
        CardiopatiasCongenitas: false,
        Diabetes: false,
        Alergias: false,
        Otro: false
    });
    
    const handleCheck = (event) => {
        setcheckboxStateEnfermedades({
            ...checkboxStateEnfermedades,
            [event.target.name]: event.target.checked
        });
    };

    const [alergias_insc, setAlergias_insc] = useState("");
    const [medicamentos_insc, setMedicamentos_insc] = useState("");
    const [menu_insc, setMenu_insc] = useState("");
    const [enfermedad_otro_insc, setEnfermedad_otro_insc] = useState("");

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

    function handleSubmit(e) {
        e.preventDefault(); // cancela el evento submit
        // manejar la lógica del envío del formulario aquí
    }

    const validarInputs = () => {
        if (nombre_insc !== "" && apellido_insc !== "" && nac_insc !== "" && documento_insc !== "" && sexo_insc !== "" && email_insc !== "" && tel_insc !== "" && colegio_insc !== "" && colegio_otro_insc !== "" && año_insc !== "" && parrmov_insc !== "" && parrmov_otro_insc !== "" && pj_insc !== "" && obrasocial_insc !== "" && afiliado_insc !== "" && sangre_insc !== "" && checkboxStateEnfermedades !== "" && alergias_insc !== "" && medicamentos_insc !== "" && menu_insc !== "" && enfermedad_otro_insc !== "" && nombre_tutor1 !== "" && apellido_tutor1 !== "" && email_tutor1 !== "" && tel_tutor1 !== "" && nombre_tutor2 !== "" && apellido_tutor2 !== "" && email_tutor2 !== "" && tel_tutor2 !== "") {

            console.log("Completo");
            //DATOS QUE SE CARGAN
            const inscripto = {

                //Filtro para Firebase
                filtrar: {
                    nom: nombre_insc,
                    ap: apellido_insc
                },
                // Datos Inscripto
                datos_inscripto: {
                    nombre_insc: nombre_insc,
                    apellido_insc: apellido_insc,
                    documento_insc: documento_insc,
                    nac_insc: nac_insc,
                    obrasocial_insc: obrasocial_insc,
                    afiliado_insc: afiliado_insc,
                    email_insc: email_insc,
                    sexo_insc: sexo_insc,
                    colegio_insc: colegio_insc,
                    colegio_otro_insc: colegio_otro_insc,
                    año_insc: año_insc,
                    parrmov_insc: parrmov_insc,
                    parrmov_otro_insc: parrmov_otro_insc,
                    enfermedad_insc: checkboxStateEnfermedades,
                    enfermedad_otro_insc: enfermedad_otro_insc,
                    alergias_insc: alergias_insc,
                    medicamentos_insc: medicamentos_insc,
                    menu_insc: menu_insc,
                    sangre_insc: sangre_insc,
                    tel_insc: tel_insc,
                    pj_insc: pj_insc,
                },
                // Datos Tutor 1
                tutor1: {
                    nombre_tutor1: nombre_tutor1,
                    apellido_tutor1: apellido_tutor1,
                    email_tutor1: email_tutor1,
                    tel_tutor1: tel_tutor1,
                },
                // Datos Tutor 2
                tutor2: {
                    nombre_tutor2: nombre_tutor2,
                    apellido_tutor2: apellido_tutor2,
                    email_tutor2: email_tutor2,
                    tel_tutor2: tel_tutor2
                }
            };

            const db = getFirestore();
            const inscriptoCollection = collection(db, "inscripto");
            addDoc(inscriptoCollection, inscripto).then((snapShot) => {
                setOrderId(snapShot.id);
            })

        }
        else {
            console.log("Inputs Incompletos");
        }
    }

    return (
        <div className="animate__animated animate__zoomIn animate__delay-1s">
            <h1 className="container pt-5 d-flex align-items-center justify-content-center">Datos Personales</h1>
            <form className="container pt-2" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col md-6 pt-3">
                        <label htmlFor="inputState">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre" onInput={(e) => { setNombre_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido" onInput={(e) => { setApellido_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" placeholder="Ingrese su Fecha de Nacimiento" aria-label="Fecha de Nacimiento" onInput={(e) => { setNac_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Documento</label>
                        <input type="" pattern="[0-9]+" className="form-control" placeholder="Ingrese su Documento" aria-label="Documento" onInput={(e) => { setDocumento_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Sexo</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setSexo_insc(e.target.value) }}>
                            <option defaultValue>Ingrese su Sexo</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Email</label>
                        <input type="email" className="form-control" placeholder="Ingrese su Email" aria-label="Email" onInput={(e) => { setEmail_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Número de teléfono (Completo) 54381*******</label>
                        <input type="" pattern="[0-9]+" className="form-control" placeholder="Ingrese su Número de teléfono" aria-label="Número de teléfono (Completo) 54381*******" onInput={(e) => { setTel_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Colegio</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setColegio_insc(e.target.value) }}>
                            <option defaultValue>Ingrese su Colegio</option>
                            <option>20 de Julio</option>
                            <option>Alfonsina Storni</option>
                            <option>Ballesteros</option>
                            <option>Bella Vista</option>
                            <option>Colegio Salesiano General Belgrano</option>
                            <option>Comercio Nro 1</option>
                            <option>El mirador</option>
                            <option>El Salvador</option>
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
                            <option>San Fernando</option>
                            <option>San Francisco</option>
                            <option>San Javier</option>
                            <option>San Joaquín</option>
                            <option>San José</option>
                            <option>San Matías</option>
                            <option>San Pablo Apóstol</option>
                            <option>San Patricio</option>
                            <option>San Vicente de Paul</option>
                            <option>Salesiano General Belgrano</option>
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
                    </div>
                    <div className="col-md-4 pt-3">
                        <label className="" htmlFor="inputState">Otro colegio</label>
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Otro Colegio" onInput={(e) => { setColegio_otro_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-2 pt-3">
                        <label htmlFor="inputState">Año</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setAño_insc(e.target.value) }}>
                            <option defaultValue>Ingrese el año</option>
                            <option>5to</option>
                            <option>6to</option>
                            <option>7mo</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Parroquia/Movimiento</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setParroqmov_insc(e.target.value) }}>
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
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Otra Parroquia/Movimiento</label>
                        <input type="text" className="form-control" placeholder="Nombre/Listo" aria-label="Otra Parroquia/Movimiento" onInput={(e) => { setParroqmov_otro_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">¿Habías participado antes Pascua joven?</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setPj_insc(e.target.value) }}>
                            <option defaultValue>Seleccionar</option>
                            <option>Sí</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="col-md-6 pt-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Obra Social</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Obra Social" aria-label="Obra Social" onInput={(e) => { setObrasocial_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Número de Afiliado</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Número de Afiliado" aria-label="Número de Afiliado" onInput={(e) => { setAfiliado_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Grupo sanguíneo y factor RH</label>
                        <select id="inputState" className="form-select" onInput={(e) => { setSangre_insc(e.target.value) }} >
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
                    <div className="col-md-6 pt-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Enfermedad/es</label>
                        <div className="pt-2">
                            <label className="p-1">
                                <input type="checkbox" name="Ninguna" checked={checkboxStateEnfermedades.Ninguna} onChange={handleCheck} />
                                Ninguna
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="ProblemasRespiratorios" checked={checkboxStateEnfermedades.ProblemasRespiratorios} onChange={handleCheck} />
                                Problemas respiratorios
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="HipertensionArterial" checked={checkboxStateEnfermedades.HipertensionArterial} onChange={handleCheck} />
                                Hipertensión arterial
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="CardiopatiasCongenitas" checked={checkboxStateEnfermedades.CardiopatiasCongenitas} onChange={handleCheck} />
                                Cardiopatías congénitas
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="Diabetes" checked={checkboxStateEnfermedades.Diabetes} onChange={handleCheck} />
                                Diabetes
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="Alergias" checked={checkboxStateEnfermedades.Alergias} onChange={handleCheck} />
                                Alergias
                            </label>
                            <label className="p-1">
                                <input type="checkbox" name="Otro" checked={checkboxStateEnfermedades.Otro} onChange={handleCheck} />
                                Otro
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Alergias a medicamentos, comidas, otros. ¿Cuáles?</label>
                        <input type="text" className="form-control" placeholder="Especificar Alergias/No" aria-label="Alergias a medicamentos, comidas, otros. ¿Cuáles?" onInput={(e) => { setAlergias_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Medicamentos que recibe habitualmente</label>
                        <input type="text" className="form-control" placeholder="Especificar Medicamentos/No" aria-label="Medicamentos que recibe habitualmente" onInput={(e) => { setMedicamentos_insc(e.target.value) }} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Menú especial</label>
                        <input type="text" className="form-control" placeholder="Especificar Menú/No" aria-label="Menú especial" onInput={(e) => { setMenu_insc(e.target.value) }} required />
                    </div>
                    <div className="col-md-6 pt-3">
                        <label htmlFor="inputState">Otra/s Enfermedad/es</label>
                        <input type="text" className="form-control" placeholder="Especificar enfermedad/No" aria-label="Otra/s Enfermedad/es" onInput={(e) => { setEnfermedad_otro_insc(e.target.value) }} required />
                    </div>
                </div>
                <h2 className="container pt-5 d-flex align-items-center justify-content-center">Datos Tutor 1</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Nombres</label>
                            <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre Tutor 1" onInput={(e) => { setNombre_tutor1(e.target.value) }} required />
                        </div>
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Apellido</label>
                            <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido Tutor 1" onInput={(e) => { setApellido_tutor1(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Email</label>
                            <input type="email" className="form-control" placeholder="Ingrese su Email" aria-label="Email Tutor 1" onInput={(e) => { setEmail_tutor1(e.target.value) }} required />
                        </div>
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Número de teléfono (Completo) 54381*******</label>
                            <input type="" pattern="[0-9]+" className="form-control" placeholder="Ingrese su Número de teléfono (Completo) 54381******* Tutor 1" aria-label="Número de Teléfono" onInput={(e) => { setTel_tutor1(e.target.value) }} required />
                        </div>
                    </div>
                </div >
                <h2 className="container pt-5 d-flex align-items-center justify-content-center">Datos Tutor 2</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese sus Nombres" aria-label="Nombre Tutor 2" onInput={(e) => { setNombre_tutor2(e.target.value) }} required />
                        </div>
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Apellido</label>
                            <input type="text" className="form-control" placeholder="Ingrese sus Apellidos" aria-label="Apellido Tutor 2" onInput={(e) => { setApellido_tutor2(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Email</label>
                            <input type="email" className="form-control" placeholder="Ingrese su Email" aria-label="Email Tutor 2" onInput={(e) => { setEmail_tutor2(e.target.value) }} required />
                        </div>
                        <div className="col-md-6 pt-3">
                            <label htmlFor="inputState">Número de teléfono (Completo) 54381*******</label>
                            <input type="" pattern="[0-9]+" className="form-control" placeholder="Ingrese su Número de teléfono (Completo) 54381******* Tutor 2" aria-label="Número de Teléfono" onInput={(e) => { setTel_tutor2(e.target.value) }} required />
                        </div>
                    </div>
                </div >
                <div className="container">
                    {orderId ? "" :
                        <div className="pt-5 d-grid justify-content-center">
                            <button className="btn btn-light" type="submit" onClick={validarInputs}>Enviar</button>
                        </div>}
                </div>
            </form >
            <div className="container">
                {orderId ? <div><h2 className="pt-5 text-center">Felicidades {nombre_insc} tus datos fueron enviados! Gracias por pre-inscribirte a Pascua Joven!</h2><p className="text-center">Recuerda presentar los datos solicitados especificados de los Requisitos de Inscripción en la sección principal. En nuestras redes sociales vamos a estar manteniendote al día con el retiro. La preinscripción no asegura tu lugar en el retiro, solo lo reserva. Te vamos a contactar por email. Ante cualquier consulta podes comunicarte con nosotros mediante el correo pascuajoventucuman@gmail.com</p></div> : ""}
            </div>
        </div>
    )
}

export default Inscribirme;