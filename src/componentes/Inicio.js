// src/components/Inicio.js
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <Fragment>
      <title>CursosOnline!</title>
      <header>
        <div className="container">
          <p className="logo">Cursos Online!</p>
          <nav>
            <Link to="#">Quienes Somos</Link>
            <Link to="#">Nuestros Programas</Link>
            <Link to="#">Características</Link>
          </nav>
          <ul>
            <li>
              <Link to="/registro">Iniciar sesión</Link>
            </li>
          </ul>
        </div>
      </header>
      <section id="hero">
        <h1>Aprende <br /> con los Mejores</h1>
        <Link to="/registro">
          <button>APLICÁ YA!</button>
        </Link>
      </section>
      <section id="somos-proya">
        <div className="container">
          <div className="img-container" />
          <div className="texto">
            <h2>Cursos <span className="color-acento">Online!</span></h2>
            <p>
              Nuestro equipo de expertos instructores está comprometido a brindarte una experiencia de aprendizaje enriquecedora y dinámica.
            </p>
          </div>
        </div>
      </section>
      <section id="nuestros-programas">
        <div className="container">
          <h2>Conoce sobre nuestros cursos</h2>
          <div className="programas">
            <div className="carta">
              <h3>Curso de Desarrollo Web con HTML y CSS</h3>
              <p>
                Descubre cómo crear sitios web dinámicos y atractivos utilizando HTML para la estructura y CSS para el diseño y la presentación.
              </p>
              <Link to="https://youtu.be/mK8H9lY2xcM">
                <button>+ Info</button>
              </Link>
            </div>
            <div className="carta">
              <h3>Curso de Fundamentos de JavaScript</h3>
              <p>
                Aprende los fundamentos de JavaScript, incluyendo variables, tipos de datos, funciones y manipulación del DOM.
              </p>
              <Link to="https://youtu.be/sYqn4lhcMZE">
                <button>+ Info</button>
              </Link>
            </div>
            <div className="carta">
              <h3>Curso de aprendizaje de Python</h3>
              <p>
                En este curso aprenderás los conceptos básicos de Python, incluyendo sintaxis, estructuras de datos y programación orientada a objetos.
              </p>
              <Link to="https://youtu.be/n2YrGsXJC6Y">
                <button>+ Info</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="caracteristicas">
        <div className="container">
          <ul>
            <li>✔️ 100% online</li>
            <li>✔️ Flexibilidad de horarios</li>
            <li>✔️ Soporte 1:1</li>
            <li>✔️ Asistencia financiera</li>
          </ul>
        </div>
      </section>
      <section id="final">
        <h2>Listo para aprender con nosotros</h2>
        <Link to="/registro">
          <button>APLICÁ YA!</button>
        </Link>
      </section>
      <footer>
        <div className="container">
          <p />
        </div>
      </footer>
    </Fragment>
  );
}

export default Inicio;
