import React from "react";
import { Link } from "react-router-dom";

const PreguntasFrecuentes = () => {
    return (
        <div className="container pb-5">
            <div className="row pt-5">
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Es necesario tener conocimiento previo al retiro</h4>
                            <p>Problema 1</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s animate__animated animate__bounceIn animate__delay-1s" src="../images/otros/biblia.jpg" alt=""/>
                    </div>
                </section>
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-2s" src="../images/otros/problema.jpg" alt=""/>
                    </div>
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Que necesito llevar</h4>
                            <p>Problema 2</p>
                        </div>
                    </div>
                </section>
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Problema 3</h4>
                            <p>Problema 3</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-3s" src="../images/otros/problema.jpg" alt=""/>
                    </div>
                </section>
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-3s" src="../images/otros/problema.jpg" alt=""/>
                    </div>
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Problema 4</h4>
                            <p>Problema 4</p>
                        </div>
                    </div>
                </section>
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInLeft">
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-start">Problema 5</h4>
                            <p>Problema 5</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-2s" src="../images/otros/problema.jpg" alt=""/>
                    </div>
                </section>
                <section className="row col-lg-6 gx-0 align-items-center border p-2 animate__animated animate__fadeInRight">
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s" src="../images/otros/problema.jpg" alt=""/>
                    </div>
                    <div className="col-sm-4 col-md-5 col-lg-7 align-self-start">
                        <div className="m-3">
                            <h4 className="text-end">Problema 6</h4>
                            <p>Problema 6</p>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <p className="text-center pt-2 animate__animated animate__bounceIn animate__delay-4s">Si no encontras solución en tu problema no dudes en contactarnos. Por favor, tenganos paciencia, pronto te estaremos dando una solución</p>
                </section>
                
            </div>
            <div className="animate__animated animate__bounceIn animate__delay-4s">
                <button className="btn btn-light d-grid mx-auto mt-3 border d-flex animate__animated animate__flash animate__delay-5s">Contactanos</button>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes;