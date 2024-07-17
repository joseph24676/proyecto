import React, { useState } from 'react';
import './Curso_c.css';

const CursoHtml = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const answers = {
    1: { q1: 'a', q2: 'b' },
    2: { q1: 'b', q2: 'b' },
    3: { q1: 'b', q2: 'b' },
    4: { q1: 'a', q2: 'a' },
    5: { q1: 'a', q2: 'a' }
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
        <h1>Curso de HTML</h1>
      </header>
      <main className="c-main">
        {currentSection === 1 && (
          <section id="seccion1">
            <h2>Sección 1: Introducción a HTML</h2>
            <p>HTML (HyperText Markup Language) es el estándar para crear páginas web. Aquí aprenderás los conceptos básicos.</p>
            <h3>Ejemplo de HTML:</h3>
            <pre className="c-pre">
              <code>
                &lt;!DOCTYPE html&gt;<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;Página de ejemplo&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;h1&gt;Hola, Mundo!&lt;/h1&gt;<br />
                &lt;p&gt;Este es un párrafo de ejemplo.&lt;/p&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion1">
              <div className="c-question">
                <p>1. ¿Qué significa HTML?</p>
                <label><input type="radio" name="q1" value="a" /> HyperText Markup Language</label><br />
                <label><input type="radio" name="q1" value="b" /> HighText Machine Language</label><br />
                <label><input type="radio" name="q1" value="c" /> Hyperloop Machine Language</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el elemento HTML correcto para el título más grande?</p>
                <label><input type="radio" name="q2" value="a" /> &lt;heading&gt;</label><br />
                <label><input type="radio" name="q2" value="b" /> &lt;h1&gt;</label><br />
                <label><input type="radio" name="q2" value="c" /> &lt;head&gt;</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(1)}>Enviar</button>
            </form>
            <div id="quiz-result">{results[1]}</div>
          </section>
        )}
        {currentSection === 2 && (
          <section id="seccion2">
            <h2>Sección 2: Estructura básica de una página HTML</h2>
            <p>Una página HTML está estructurada con elementos como el encabezado, el cuerpo y el pie de página.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion2">
              <div className="c-question">
                <p>1. ¿Qué elemento HTML contiene la información que se muestra en la pestaña del navegador?</p>
                <label><input type="radio" name="q1" value="a" /> &lt;meta&gt;</label><br />
                <label><input type="radio" name="q1" value="b" /> &lt;title&gt;</label><br />
                <label><input type="radio" name="q1" value="c" /> &lt;head&gt;</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el elemento correcto para definir una sección en el cuerpo de la página?</p>
                <label><input type="radio" name="q2" value="a" /> &lt;div&gt;</label><br />
                <label><input type="radio" name="q2" value="b" /> &lt;section&gt;</label><br />
                <label><input type="radio" name="q2" value="c" /> &lt;body&gt;</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(2)}>Enviar</button>
            </form>
            <div id="quiz-result">{results[2]}</div>
          </section>
        )}
        {currentSection === 3 && (
          <section id="seccion3">
            <h2>Sección 3: Etiquetas comunes en HTML</h2>
            <p>Aprende a usar etiquetas HTML comunes como &lt;a&gt;, &lt;img&gt;, &lt;table&gt;, y más.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion3">
              <div className="c-question">
                <p>1. ¿Qué etiqueta se usa para crear un enlace en HTML?</p>
                <label><input type="radio" name="q1" value="a" /> &lt;link&gt;</label><br />
                <label><input type="radio" name="q1" value="b" /> &lt;a&gt;</label><br />
                <label><input type="radio" name="q1" value="c" /> &lt;href&gt;</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué atributo se usa para especificar la URL de un enlace?</p>
                <label><input type="radio" name="q2" value="a" /> src</label><br />
                <label><input type="radio" name="q2" value="b" /> href</label><br />
                <label><input type="radio" name="q2" value="c" /> link</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(3)}>Enviar</button>
            </form>
            <div id="quiz-result">{results[3]}</div>
          </section>
        )}
        {currentSection === 4 && (
          <section id="seccion4">
            <h2>Sección 4: Formularios en HTML</h2>
            <p>Los formularios permiten a los usuarios enviar datos a un servidor.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion4">
              <div className="c-question">
                <p>1. ¿Qué etiqueta HTML se usa para definir un formulario?</p>
                <label><input type="radio" name="q1" value="a" /> &lt;form&gt;</label><br />
                <label><input type="radio" name="q1" value="b" /> &lt;input&gt;</label><br />
                <label><input type="radio" name="q1" value="c" /> &lt;button&gt;</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué atributo define el tipo de entrada en un formulario?</p>
                <label><input type="radio" name="q2" value="a" /> type</label><br />
                <label><input type="radio" name="q2" value="b" /> name</label><br />
                <label><input type="radio" name="q2" value="c" /> input</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(4)}>Enviar</button>
            </form>
            <div id="quiz-result">{results[4]}</div>
          </section>
        )}
        {currentSection === 5 && (
          <section id="seccion5">
            <h2>Sección 5: Multimedia en HTML</h2>
            <p>Incrusta videos, audios e imágenes en tus páginas web.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion5">
              <div className="c-question">
                <p>1. ¿Qué etiqueta se usa para incrustar un video en HTML?</p>
                <label><input type="radio" name="q1" value="a" /> &lt;video&gt;</label><br />
                <label><input type="radio" name="q1" value="b" /> &lt;media&gt;</label><br />
                <label><input type="radio" name="q1" value="c" /> &lt;embed&gt;</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué atributo se usa para definir la fuente del video?</p>
                <label><input type="radio" name="q2" value="a" /> src</label><br />
                <label><input type="radio" name="q2" value="b" /> href</label><br />
                <label><input type="radio" name="q2" value="c" /> source</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(5)}>Enviar</button>
            </form>
            <div id="quiz-result">{results[5]}</div>
          </section>
        )}
        {currentSection === 6 && (
          <section id="final">
            <h2>¡Felicitaciones!</h2>
            <p>Has completado todas las secciones del curso de HTML.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default CursoHtml;
