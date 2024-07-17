import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <Fragment>
      <title>Plataforma de Cursos</title>
      <header className="pr-header">
        <div className="pr-container">
          <h1 className="pr-title">Plataforma de Cursos</h1>
          <nav className="pr-nav">
            <ul className="pr-list">
              <li className="pr-item">
                <Link to="/miscursos" className="pr-link">
                  Mis Cursos
                </Link>
              </li>
              <li className="pr-item">
                <Link to="/perfil" className="pr-link">
                  Perfil
                </Link>
              </li>
              <li className="pr-item">
                <Link to="/" className="pr-link">
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="pr-hero">
        <div className="pr-container">
          <p className="pr-description">Explora una amplia variedad de cursos.</p>
          <Link to="/cursos" className="pr-btn">
            Ver cursos disponibles
          </Link>
        </div>
      </section>
      <section className="pr-features">
        <div className="pr-container">
          <div className="pr-feature">
            <h3 className="pr-feature-title">¡Bienvenido a nuestra plataforma de aprendizaje en línea! </h3>
            <p className="pr-feature-description">
              Descubre una amplia variedad de cursos diseñados para ayudarte a alcanzar tus metas personales y profesionales.
            </p>
          </div>
          <div className="pr-feature">
            <h3 className="pr-feature-title">Aprende a tu propio ritmo</h3>
            <p className="pr-feature-description">
              Accede a los cursos en cualquier momento y desde cualquier lugar.
            </p>
          </div>
          <div className="pr-feature">
            <h3 className="pr-feature-title">Variedad de temas</h3>
            <p className="pr-feature-description">
              Explora una amplia gama de temas, desde tecnología y diseño.
            </p>
          </div>
        </div>
      </section>
      <footer className="pr-footer">
        <div className="pr-container">
          <p className="pr-text" />
        </div>
      </footer>
    </Fragment>
  );
}

export default Principal;
