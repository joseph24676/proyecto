import React, { useState } from 'react';
import './Curso_c.css';

const CursoCss = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const answers = {
    1: { q1: 'a', q2: 'b' },
    2: { q1: 'b', q2: 'c' },
    3: { q1: 'b', q2: 'a' },
    4: { q1: 'b', q2: 'a' },
    5: { q1: 'b', q2: 'b' }
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
        <h1>Curso de CSS</h1>
      </header>
      <main className="c-main">
        {currentSection === 1 && (
          <section id="seccion1">
            <h2>Sección 1: Introducción a CSS</h2>
            <p>CSS (Cascading Style Sheets) es el lenguaje que usamos para estilizar una página HTML.</p>
            <h3>Ejemplo de CSS:</h3>
            <pre className="c-pre">
              <code>
                body {'{'}<br />
                &nbsp;&nbsp;font-family: Arial, sans-serif;<br />
                {'}'}<br />
                h1 {'{'}<br />
                &nbsp;&nbsp;color: blue;<br />
                {'}'}<br />
                p {'{'}<br />
                &nbsp;&nbsp;font-size: 14px;<br />
                {'}'}
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion1">
              <div className="c-question">
                <p>1. ¿Qué significa CSS?</p>
                <label><input type="radio" name="q1" value="a" /> Cascading Style Sheets</label><br />
                <label><input type="radio" name="q1" value="b" /> Computer Style Sheets</label><br />
                <label><input type="radio" name="q1" value="c" /> Creative Style Sheets</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Dónde se debe incluir la referencia a una hoja de estilos externa en HTML?</p>
                <label><input type="radio" name="q2" value="a" /> En la sección &lt;body&gt;</label><br />
                <label><input type="radio" name="q2" value="b" /> En la sección &lt;head&gt;</label><br />
                <label><input type="radio" name="q2" value="c" /> Al final del documento</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(1)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion1">{results[1]}</div>
          </section>
        )}
        {currentSection === 2 && (
          <section id="seccion2">
            <h2>Sección 2: Selectores y Propiedades de CSS</h2>
            <p>CSS usa selectores para aplicar estilos a elementos HTML específicos.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion2">
              <div className="c-question">
                <p>1. ¿Qué selector se usa para aplicar estilos a un elemento con una clase específica?</p>
                <label><input type="radio" name="q1" value="a" /> #nombreClase</label><br />
                <label><input type="radio" name="q1" value="b" /> .nombreClase</label><br />
                <label><input type="radio" name="q1" value="c" /> nombreClase</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es la propiedad correcta para cambiar el color del texto en CSS?</p>
                <label><input type="radio" name="q2" value="a" /> text-color</label><br />
                <label><input type="radio" name="q2" value="b" /> font-color</label><br />
                <label><input type="radio" name="q2" value="c" /> color</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(2)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion2">{results[2]}</div>
          </section>
        )}
        {currentSection === 3 && (
          <section id="seccion3">
            <h2>Sección 3: Modelo de Caja de CSS</h2>
            <p>El modelo de caja de CSS describe cómo se colocan y dimensionan los elementos HTML.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion3">
              <div className="c-question">
                <p>1. ¿Qué propiedad se usa para agregar espacio dentro de un elemento?</p>
                <label><input type="radio" name="q1" value="a" /> margin</label><br />
                <label><input type="radio" name="q1" value="b" /> padding</label><br />
                <label><input type="radio" name="q1" value="c" /> border</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué propiedad define el espacio fuera de los bordes de un elemento?</p>
                <label><input type="radio" name="q2" value="a" /> margin</label><br />
                <label><input type="radio" name="q2" value="b" /> padding</label><br />
                <label><input type="radio" name="q2" value="c" /> border</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(3)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion3">{results[3]}</div>
          </section>
        )}
        {currentSection === 4 && (
          <section id="seccion4">
            <h2>Sección 4: Flexbox en CSS</h2>
            <p>Flexbox es un modelo de diseño que facilita la alineación y distribución de elementos dentro de un contenedor.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion4">
              <div className="c-question">
                <p>1. ¿Qué propiedad define un contenedor flex en CSS?</p>
                <label><input type="radio" name="q1" value="a" /> flex</label><br />
                <label><input type="radio" name="q1" value="b" /> display: flex</label><br />
                <label><input type="radio" name="q1" value="c" /> flex-container</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué propiedad alinea elementos flexibles en la dirección principal?</p>
                <label><input type="radio" name="q2" value="a" /> justify-content</label><br />
                <label><input type="radio" name="q2" value="b" /> align-items</label><br />
                <label><input type="radio" name="q2" value="c" /> align-content</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(4)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion4">{results[4]}</div>
          </section>
        )}
        {currentSection === 5 && (
          <section id="seccion5">
            <h2>Sección 5: Grid Layout en CSS</h2>
            <p>CSS Grid Layout es un sistema de diseño bidimensional para crear diseños complejos en la web.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion5">
              <div className="c-question">
                <p>1. ¿Qué propiedad define un contenedor de cuadrícula en CSS?</p>
                <label><input type="radio" name="q1" value="a" /> grid-template</label><br />
                <label><input type="radio" name="q1" value="b" /> display: grid</label><br />
                <label><input type="radio" name="q1" value="c" /> grid-layout</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué propiedad se usa para definir el número de columnas en una cuadrícula?</p>
                <label><input type="radio" name="q2" value="a" /> grid-template-rows</label><br />
                <label><input type="radio" name="q2" value="b" /> grid-template-columns</label><br />
                <label><input type="radio" name="q2" value="c" /> grid-columns</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(5)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion5">{results[5]}</div>
          </section>
        )}
        {currentSection === 6 && (
          <section id="final">
            <h2>¡Felicitaciones!</h2>
            <p>Has completado todas las secciones del curso de CSS.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default CursoCss;
