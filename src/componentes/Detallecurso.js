import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetalleCurso = () => {
    const [cursoActual, setCursoActual] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const curso = localStorage.getItem('cursoActual');
        if (curso) {
            setCursoActual(curso);
            switch (curso) {
                case 'HTML Básico':
                    setDescripcion('Aprende las bases del desarrollo web con HTML.');
                    break;
                case 'CSS Avanzado':
                    setDescripcion('Domina el diseño web con CSS.');
                    break;
                case 'JavaScript Intermedio':
                    setDescripcion('Desarrolla habilidades en JavaScript.');
                    break;
                case 'Python para Principiantes':
                    setDescripcion('Introduce a Python desde cero.');
                    break;
                case 'Fundamentos de C':
                    setDescripcion('Conoce los fundamentos de la programación en C.');
                    break;
                case 'PHP y MySQL':
                    setDescripcion('Desarrolla aplicaciones web con PHP y MySQL.');
                    break;
                default:
                    setDescripcion('');
            }
        }
    }, []);

    const redirigirBienvenida = () => {
        let url;
        switch (cursoActual) {
            case 'HTML Básico':
                url = '/curso/html';
                break;
            case 'CSS Avanzado':
                url = '/curso/css';
                break;
            case 'JavaScript Intermedio':
                url = '/curso/javascript';
                break;
            case 'Python para Principiantes':
                url = '/curso/python';
                break;
            case 'Fundamentos de C':
                url = '/curso/c';
                break;
            case 'PHP y MySQL':
                url = '/curso/phpmysql';
                break;
            default:
                url = '/mis-cursos'; // URL por defecto
                break;
        }
        navigate(url);
    };

    return (
        <div className="cr-body">
            <header className="cr-header">
                <div className="cr-container">
                    <nav className="cr-nav">
                        <ul className="cr-ul">
                            <li className="cr-li"><a href="/principal">Inicio</a></li>
                            <li className="cr-li"><a href="/cursos">Cursos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="cr-main">
                <section className="cr-detalle">
                    <div className="cr-container">
                        <center><h1>{cursoActual}</h1></center>
                        <center><p className="cr-p">{descripcion}</p></center>
                        <center>
                            <button
                                className="cr-btn-bienvenido"
                                onClick={redirigirBienvenida}
                            >
                                Bienvenido
                            </button>
                        </center>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DetalleCurso;
