import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="animate__animated animate__backInDown">
                <h1 className="pt-5 pb-5 d-flex align-items-center justify-content-center animate__animated animate__bounce animate__delay-15s">Pascua Joven Tucumán</h1>
            </div>
            <section className="row gx-0 mb-3 align-items-center border p-1 animate__animated animate__fadeInLeft animate__delay-1s">
                <div className="col-md-5 col-lg-2">
                    <img className="img-fluid mb-4 mb-lg-0" src="../images/logo-pj.jpg" alt="futbol" />
                </div>
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-start">¿Qué es Pascua Joven?</h4>
                        <p className="text-start">Pascua Joven es un <b>RETIRO</b> de <b>ALTO IMPACTO</b> organizado por la pastoral de la juventud, dirigido a los jovenes adolescentes. Se realiza de miércoles santo y a domingo de pascua de manera presencial.</p>
                        <p className="text-start"></p>
                        <ul>
                            <li>Ubicación: <a className="text-light" target={"_blank"} href="https://www.google.com/maps/dir//campus+santa+rosa/@-26.8110626,-65.3030386,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x942242c8aaf7a97b:0xdc74dfbcd5797c30!2m2!1d-65.2975741!2d-26.7999732">Campus Colegio Santa Rosa</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="row gx-0 mb-3 align-items-center border p-1 animate__animated animate__fadeInRight animate__delay-2s">
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-end"><span className="span-2">Información del Pago</span></h4>
                        <p><b>No queremos que lo económico no sea un impedimento para participar</b>. Para resolver esto, les vamos a ofrecer rifas cuando se inscriban (con estas van a poder cubrir el retiro completo). Los premios son excelentes, así que ofrezcan lo más que puedan.Si quiere pagarlo en <b>efectivo</b>, por redes sociales comunicaremos los días en los que realizaremos los puntos de inscripción. En el caso de pagar por <b>transferencia</b>, cuando habilitemos los pagos por este medio estaremos compartiendo personalmente el CBU por mensaje privado.</p>
                    </div>
                </div>
                <div className="col-md-5 col-lg-2">
                    <img className="img-fluid mb-3 mb-lg-0" src="../images/otros/pago.jpg" alt="guitarra" />
                </div>
            </section>
            <section className="row gx-0 align-items-center border p-1 animate__animated animate__fadeInLeft animate__delay-3s">
                <div className="col-md-5  col-lg-2">
                    <img className="img-fluid mb-3 mb-lg-0" src="../images/otros/requisitos.jpg" alt="apostoles de lourdes" />
                </div>
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-start">Requisitos de inscripción</h4>
                        <ul>
                            <li>Estar en 5to o 6to año del secundario (16-18 años).</li>
                            <li>Completar el formulario de inscripción: <Link className="text-light" target={"_blank"} to={"./inscribirme"}>Inscribirme</Link>.</li>
                            <li>Presentar la siguiente autorización completada y firmada: <a className="text-light" target={"_blank"} href="https://drive.google.com/file/d/1OcJB4TjlOIwRdIzrX7zdtQhN3DzrdSrE/view">Autorización</a>.</li>
                            <li>Completar el pago del retiro. Si pago por transferencia deberá entregarnos el comprobante de la misma.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;