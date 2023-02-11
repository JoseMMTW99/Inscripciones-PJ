import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/"}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/inscribirme"}>Inscribirme</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/preguntasfrecuentes"}>Preguntas Frecuentes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;