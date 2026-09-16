import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">

                {/* Inicio */}
                <Link className="navbar-brand" to="/">
                    Inicio
                </Link>

                {/* Botón responsive */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Mostrar navegación"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Buscador */}
                    <form className="d-flex mx-auto my-2 my-lg-0" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar productos..."
                            aria-label="Buscar productos"
                        />

                        <button className="btn btn-outline-light" type="submit">
                            Buscar
                        </button>
                    </form>

                    {/* Usuario */}
                    <div className="d-flex align-items-center gap-2">

                        {/* Iniciar sesión */}
                        <Link className="btn btn-outline-light" to="/login">
                            Iniciar sesión
                        </Link>

                        {/* Registrarse */}
                        <Link className="btn btn-light" to="/registro">
                            Registrarse
                        </Link>

                        {/* Usuario desplegable */}
                        <div className="dropdown">
                            <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                                Usuario
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/perfil">
                                        Mi perfil
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/pedidos">
                                        Mis pedidos
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <button className="dropdown-item" type="button">
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header