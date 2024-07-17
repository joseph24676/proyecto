import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cursos = () => {
    const [cursosMatriculados, setCursosMatriculados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

    useEffect(() => {
        const storedCursos = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
        setCursosMatriculados(storedCursos);
    }, []);

    const matricularCurso = (curso) => {
        const confirmar = window.confirm(`¿Deseas matricularte en el curso: ${curso}?`);

        if (confirmar) {
            let cursos = [...cursosMatriculados];
            if (!cursos.includes(curso)) {
                cursos.push(curso);
                localStorage.setItem('cursosMatriculados', JSON.stringify(cursos));
                setCursosMatriculados(cursos);
                alert('Te has matriculado en el curso: ' + curso);
            } else {
                alert('Ya estás matriculado en este curso.');
            }
        }
    };

    const eliminarCurso = (curso) => {
        const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar el curso: ${curso}?`);

        if (confirmar) {
            let cursos = cursosMatriculados.filter(c => c !== curso);
            localStorage.setItem('cursosMatriculados', JSON.stringify(cursos));
            setCursosMatriculados(cursos);
            alert('Has eliminado el curso: ' + curso);
        }
    };

    const verDetalles = (curso) => {
        localStorage.setItem('cursoActual', curso);
        window.location.href = 'Detallecurso';
    };

    const buscarCurso = (e) => {
        const busquedaActual = e.target.value.toLowerCase().trim();
        setBusqueda(busquedaActual);

        const cursosEncontrados = cursos.filter(curso =>
            curso.title.toLowerCase().includes(busquedaActual) ||
            curso.description.toLowerCase().includes(busquedaActual)
        );
        setResultadosBusqueda(cursosEncontrados);
    };

    const cursos = [
        { className: 'cr-img-html', alt: 'HTML Básico', title: 'HTML Básico', description: 'Aprende las bases del desarrollo web con HTML.' },
        { className: 'cr-img-css', alt: 'CSS Avanzado', title: 'CSS Avanzado', description: 'Domina el diseño web con CSS.' },
        { className: 'cr-img-java', alt: 'JavaScript Intermedio', title: 'JavaScript Intermedio', description: 'Desarrolla habilidades en JavaScript.' },
        { className: 'cr-img-python', alt: 'Python para Principiantes', title: 'Python para Principiantes', description: 'Introduce a Python desde cero.' },
        { className: 'cr-img-c', alt: 'Fundamentos de C', title: 'Fundamentos de C', description: 'Conoce los fundamentos de la programación en C.' },
        { className: 'cr-img-php', alt: 'PHP y MySQL', title: 'PHP y MySQL', description: 'Desarrolla aplicaciones web con PHP y MySQL.' },
    ];

    return (
        <div className="cr-body">
            <header className="cr-header">
                <div className="cr-container">
                    <nav className="cr-nav">
                        <ul className="cr-ul">
                            <li className="cr-li"><Link to="/principal">Inicio</Link></li>
                            <li className="cr-li"><Link to="/miscursos">Mis Cursos</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="cr-main">
                <section className="cr-cursos">
                    <div className="cr-container">
                        <h2 className="cr-h2">Nuestros Cursos</h2>
                        <div className="cr-buscar-curso">
                            <input
                                type="text"
                                value={busqueda}
                                onChange={buscarCurso}
                                placeholder="Buscar cursos..."
                            />
                            {resultadosBusqueda.length === 0 && busqueda && (
                                <p className="cr-no-encontrado">No se encontraron cursos que coincidan con la búsqueda.</p>
                            )}
                        </div>
                        <div className="cr-grid" id="cr-grid">
                            {(resultadosBusqueda.length > 0 ? resultadosBusqueda : cursos).map((curso, index) => (
                                <div key={index} className="cr-curso">
                                    <div className={`cr-img ${curso.className}`} alt={curso.alt} />
                                    <h3 className="cr-h3">{curso.title}</h3>
                                    <p className="cr-p">{curso.description}</p>
                                    <button className="cr-btn matricular-btn" onClick={() => matricularCurso(curso.title)}>Matricular</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="cr-mis-cursos">
                    <div className="cr-container">
                        <h2 className="cr-h2">Mis Cursos Matriculados</h2>
                        <div id="cursos-matriculados">
                            {cursosMatriculados.length > 0 ? (
                                cursosMatriculados.map((curso, index) => (
                                    <div key={index} className="cr-curso">
                                        <h3 className="cr-h3">{curso}</h3>
                                        <button className="cr-btn-detalle" onClick={() => verDetalles(curso)}>Ver Detalles</button>
                                        <button className="cr-btn-eliminar" onClick={() => eliminarCurso(curso)}>Eliminar</button>
                                    </div>
                                ))
                            ) : (
                                <p>No estás matriculado en ningún curso.</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="pr-footer">
                <div className="pr-container">
                    <p className="pr-text"></p>
                </div>
            </footer>
        </div>
    );
};

export default Cursos;
