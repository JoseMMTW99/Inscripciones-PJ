import React from "react";
import { Link } from "react-router-dom";

const PreguntasFrecuentes = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row pt-5">
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className=" col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">¿Es necesario tener conocimiento previo al retiro?</h4>
                            <p>No es necesario. En el retiro vamos a tener en cuenta lo que necesiten cada uno para que lo puedan vivir de la mejor manera y los vamos a acompañar en lo que necesiten.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s animate__animated animate__bounceIn animate__delay-1s" src="../images/otros/biblia.jpg" alt="" />
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-2s" src="../images/otros/llevar.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Que necesito llevar</h4>
                            <ul>
                                <li>Mudas de ropa cómoda.</li>
                                <li>Bolsa de dormir y/o colchón Inflable.</li>
                                <li>Elementos de Higiene Personal.</li>
                                <li>Mochila o bolso de mano.</li>
                                <li>Cuaderno y cartuchera.</li>
                                <li>Botellita de agua.</li>
                                <li>Medicamentos en caso de estar indicados por su médico.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Plazo de Entrega</h4>
                            <p>Se recibirán los papeles y el dinero los días de inscripción. Por lo tanto, el plazo es hasta el último día de inscripción (les iremos avisando, pero no se dejen estar. Podemos decidir de repente que se cierran las inscripciones). Quien no complete dinero y requisitos, no podrá participar del retiro.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-3s" src="../images/otros/checklist.jpg" alt="" />
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-3s" src="../images/otros/duda.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Aclaración</h4>
                            <p>En casos de extrema necesidad, la recepción de objetos, medicamentos, etc será en la puerta
                                del Campus Santa Rosa a partir de las 18 hs hasta las 21 hs, sin excepción. Dichos objetos
                                deberán tener una etiqueta con apellido, nombre y DNI de la persona a la cual va dirigido, de lo
                                contrario no será recibido. La entrega se realizará a media noche cuando finalicen las actividades
                                programadas.</p>
                        </div>
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Formas de Pago</h4>
                            <p>Podrán pagar el retiro tanto en efectivo como por transferencia. Pero si o si deberán dejar la documentación requerida (en el caso de una transferencia, su comprobante).</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-2s" src="../images/otros/pagos.jpg" alt="" />
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s" src="../images/otros/ayuda.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">¿Se puede inscribir a otra persona?</h4>
                            <p>Sí. Deberá presentar DNI o Fotocopia de DNI del participante y toda la documentación solicitada.</p>
                        </div>
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Ficha Medica y Dieta</h4>
                            <p>Recuerden llenar todos los campos con información verídica. Se trata de <b>SU SALUD</b>. Aquellos que tengan una dieta en especial, no olviden especificar adecuadamente cuál es. Aquellas personas que tengan una dieta en especial la tendremos contemplada en el presupuesto del retiro (es decir, siempre y cuando en la <b>PRE-INSCRIPCIÓN</b> hayan detallado que son diabéticos, celíacos, veganos, vegetarianos, etc. tendrán su menú aparte).</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-2s" src="../images/otros/remedios.jpg" alt="" />
                    </div>
                </section>
                <section className="row col-xl-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s" src="../images/otros/afuera.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Si estan fuera de la ciudad podrán ir en otra fecha</h4>
                            <p>Pero por favor, estas aclaraciones son para quienes no puedan ir realmente. No queremos ser cansadores con la insistencia pero si no se inscriben ahora:</p>
                            <ul>
                                    <li>No aseguran el lugar.</li>
                                    <li>Las colas de inscripción al final serán larguísimas.</li>
                                </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row d-grid justify-content-center animate__animated animate__bounceIn animate__delay-4s">
            </div>
        </div>
    )
}

export default PreguntasFrecuentes;