import React, { useState } from 'react';
import './Curso_c.css';

const CursoPython = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const answers = {
    1: { q1: 'b', q2: 'a' },
    2: { q1: 'a', q2: 'b' },
    3: { q1: 'c', q2: 'a' },
    4: { q1: 'b', q2: 'c' },
    5: { q1: 'a', q2: 'b' }
  };

  const submitQuiz = (section) => {
    const form = document.forms[`quiz-seccion${section}`];
    let score = 0;
    const totalQuestions = Object.keys(answers[section]).length;

    for (let answer in answers[section]) {
      const userAnswer = form.elements[answer].value;
      if (userAnswer === answers[section][answer]) {
        score++;
      }
    }

    if (score === totalQuestions) {
      setResults((prevResults) => ({
        ...prevResults,
        [section]: `Tu puntuación es: ${score} de ${totalQuestions}. ¡Has completado esta sección!`,
      }));
      setCurrentSection((prevSection) => prevSection + 1);
    } else {
      setResults((prevResults) => ({
        ...prevResults,
        [section]: `Tu puntuación es: ${score} de ${totalQuestions}. Debes responder correctamente todas las preguntas para avanzar.`,
      }));
    }
  };

  return (
    <div className="c-body">
      <header className="c-header">
        <h1>Curso de Python</h1>
      </header>
      <main className="c-main">
        {currentSection === 1 && (
          <section id="seccion1">
            <h2>Sección 1: Introducción a Python</h2>
            <p>Python es un lenguaje de programación de alto nivel conocido por su simplicidad y legibilidad.</p>
            <h3>Ejemplo de Python:</h3>
            <pre className="c-pre">
              <code>
                print("Hola, Mundo!")
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion1">
              <div className="c-question">
                <p>1. ¿Qué tipo de lenguaje es Python?</p>
                <label><input type="radio" name="q1" value="a" /> Interpretado</label><br />
                <label><input type="radio" name="q1" value="b" /> Compilado</label><br />
                <label><input type="radio" name="q1" value="c" /> Ambos</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se imprime un mensaje en Python?</p>
                <label><input type="radio" name="q2" value="a" /> print("mensaje")</label><br />
                <label><input type="radio" name="q2" value="b" /> echo "mensaje"</label><br />
                <label><input type="radio" name="q2" value="c" /> printf("mensaje")</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(1)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion1">{results[1]}</div>
          </section>
        )}
        {currentSection === 2 && (
          <section id="seccion2">
            <h2>Sección 2: Estructuras de Control en Python</h2>
            <p>Python utiliza estructuras como if, for y while para controlar el flujo de ejecución del programa.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion2">
              <div className="c-question">
                <p>1. ¿Cuál es la estructura de control para un bucle en Python?</p>
                <label><input type="radio" name="q1" value="a" /> for</label><br />
                <label><input type="radio" name="q1" value="b" /> foreach</label><br />
                <label><input type="radio" name="q1" value="c" /> while</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se define una condición en Python?</p>
                <label><input type="radio" name="q2" value="a" /> if condición:</label><br />
                <label><input type="radio" name="q2" value="b" /> if (condición)</label><br />
                <label><input type="radio" name="q2" value="c" /> if condición then</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(2)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion2">{results[2]}</div>
          </section>
        )}
        {currentSection === 3 && (
          <section id="seccion3">
            <h2>Sección 3: Funciones y Módulos en Python</h2>
            <p>Las funciones y los módulos son elementos fundamentales para organizar y reutilizar código en Python.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion3">
              <div className="c-question">
                <p>1. ¿Cómo se define una función en Python?</p>
                <label><input type="radio" name="q1" value="a" /> def nombre_funcion():</label><br />
                <label><input type="radio" name="q1" value="b" /> function nombre_funcion()</label><br />
                <label><input type="radio" name="q1" value="c" /> define nombre_funcion()</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué se utiliza para importar un módulo en Python?</p>
                <label><input type="radio" name="q2" value="a" /> use</label><br />
                <label><input type="radio" name="q2" value="b" /> import</label><br />
                <label><input type="radio" name="q2" value="c" /> require</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(3)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion3">{results[3]}</div>
          </section>
        )}
        {currentSection === 4 && (
          <section id="seccion4">
            <h2>Sección 4: Manipulación de Archivos en Python</h2>
            <p>Python proporciona funciones integradas para leer, escribir y manipular archivos en el sistema.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion4">
              <div className="c-question">
                <p>1. ¿Cómo se abre un archivo en modo lectura en Python?</p>
                <label><input type="radio" name="q1" value="a" /> open("archivo.txt", "r")</label><br />
                <label><input type="radio" name="q1" value="b" /> read("archivo.txt")</label><br />
                <label><input type="radio" name="q1" value="c" /> file_open("archivo.txt")</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué método se utiliza para escribir datos en un archivo en Python?</p>
                <label><input type="radio" name="q2" value="a" /> write()</label><br />
                <label><input type="radio" name="q2" value="b" /> save()</label><br />
                <label><input type="radio" name="q2" value="c" /> append()</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(4)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion4">{results[4]}</div>
          </section>
        )}
        {currentSection === 5 && (
          <section id="seccion5">
            <h2>Sección 5: Excepciones y Manejo de Errores en Python</h2>
            <p>Python maneja excepciones para controlar situaciones inesperadas durante la ejecución del programa.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion5">
              <div className="c-question">
                <p>1. ¿Qué palabra clave se usa en Python para manejar excepciones?</p>
                <label><input type="radio" name="q1" value="a" /> catch</label><br />
                <label><input type="radio" name="q1" value="b" /> except</label><br />
                <label><input type="radio" name="q1" value="c" /> try</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se captura cualquier excepción en Python?</p>
                <label><input type="radio" name="q2" value="a" /> catch Exception as e:</label><br />
                <label><input type="radio" name="q2" value="b" /> except All as e:</label><br />
                <label><input type="radio" name="q2" value="c" /> try All as e:</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(5)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion5">{results[5]}</div>
          </section>
        )}
        {currentSection === 6 && (
          <section id="final">
            <h2>¡Felicitaciones!</h2>
            <p>Has completado todas las secciones del curso de Python.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default CursoPython;
