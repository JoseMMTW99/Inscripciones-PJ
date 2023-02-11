import React from "react";

const Home = () => {
    return (
        <div className="container">
            <div className="animate__animated animate__backInDown">
                <h1 className="pt-5 pb-5 d-flex align-items-center justify-content-center animate__animated animate__bounce animate__delay-15s">Pascua Joven Tucumán</h1>
            </div>
            <section className="row gx-0 mb-3 align-items-center border p-2 animate__animated animate__fadeInLeft animate__delay-1s">
                <div className="col-md-5 col-lg-2">
                    <img className="img-fluid mb-4 mb-lg-0" src="../images/logo-pj.jpg" alt="futbol" />
                </div>
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-start">¿Qué es Pascua Joven?</h4>
                        <p className="text-start"></p>
                    </div>
                </div>
            </section>
            <section className="row gx-0 mb-3 align-items-center border p-2 animate__animated animate__fadeInRight animate__delay-2s">
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-end"><span className="span-2">¿Donde es?</span></h4>
                        <p className="text-start"></p>
                    </div>
                </div>
                <div className="col-md-5  col-lg-2">
                    <img className="img-fluid mb-3 mb-lg-0" src="../images/logo-pj.jpg" alt="guitarra" />
                </div>
            </section>
            <section className="row gx-0 mb-3 align-items-center border p-2 animate__animated animate__fadeInLeft animate__delay-3s">
                <div className="col-md-5  col-lg-2">
                    <img className="img-fluid mb-3 mb-lg-0" src="../images/logo-pj.jpg" alt="apostoles de lourdes" />
                </div>
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-start">¿Cuando es?</h4>
                        <p className="text-start"></p>
                    </div>
                </div>
            </section>
            <section className="row gx-0 mb-3 align-items-center border p-2 animate__animated animate__fadeInRight animate__delay-4s">
                <div className="col-md-7 col-lg-10 align-self-start">
                    <div className="m-3">
                        <h4 className="text-end"><span className="span-2">Requisitos de inscripción</span></h4>
                        <p className="text-start"></p>
                    </div>
                </div>
                <div className="col-md-5  col-lg-2">
                    <img className="img-fluid mb-3 mb-lg-0" src="../images/logo-pj.jpg" alt="guitarra" />
                </div>
            </section>
        </div>
    )
}

export default Home;