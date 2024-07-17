import React, { useState } from 'react';
import './Curso_c.css';

const CursoJavascript = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const answers = {
    1: { q1: 'a', q2: 'b' },
    2: { q1: 'b', q2: 'a' },
    3: { q1: 'c', q2: 'b' },
    4: { q1: 'a', q2: 'c' },
    5: { q1: 'b', q2: 'a' }
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
        <h1>Curso de JavaScript</h1>
      </header>
      <main className="c-main">
        {currentSection === 1 && (
          <section id="seccion1">
            <h2>Sección 1: Introducción a JavaScript</h2>
            <p>JavaScript es un lenguaje de programación utilizado principalmente en el desarrollo web.</p>
            <h3>Ejemplo de JavaScript:</h3>
            <pre className="c-pre">
              <code>
                {'<script>'}<br />
                &nbsp;&nbsp;document.getElementById("demo").innerHTML = "¡Hola, Mundo!";<br />
                {'</script>'}
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion1">
              <div className="c-question">
                <p>1. ¿Qué tipo de lenguaje es JavaScript?</p>
                <label><input type="radio" name="q1" value="a" /> Lenguaje de programación de servidor</label><br />
                <label><input type="radio" name="q1" value="b" /> Lenguaje de programación de marcado</label><br />
                <label><input type="radio" name="q1" value="c" /> Lenguaje de programación de cliente</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se puede incluir JavaScript en una página HTML?</p>
                <label><input type="radio" name="q2" value="a" /> Mediante el uso de etiquetas &lt;js&gt; y &lt;/js&gt;</label><br />
                <label><input type="radio" name="q2" value="b" /> Mediante el uso de etiquetas &lt;script&gt; y &lt;/script&gt;</label><br />
                <label><input type="radio" name="q2" value="c" /> Mediante el uso de etiquetas &lt;javascript&gt; y &lt;/javascript&gt;</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(1)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion1">{results[1]}</div>
          </section>
        )}
        {currentSection === 2 && (
          <section id="seccion2">
            <h2>Sección 2: Variables y Tipos de Datos en JavaScript</h2>
            <p>JavaScript utiliza variables para almacenar datos y se distingue por ser un lenguaje de tipado dinámico.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion2">
              <div className="c-question">
                <p>1. ¿Cómo se declara una variable en JavaScript?</p>
                <label><input type="radio" name="q1" value="a" /> var variableNombre;</label><br />
                <label><input type="radio" name="q1" value="b" /> variable variableNombre;</label><br />
                <label><input type="radio" name="q1" value="c" /> let variableNombre;</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el resultado de 10 + "5" en JavaScript?</p>
                <label><input type="radio" name="q2" value="a" /> 15</label><br />
                <label><input type="radio" name="q2" value="b" /> "105"</label><br />
                <label><input type="radio" name="q2" value="c" /> Error</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(2)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion2">{results[2]}</div>
          </section>
        )}
        {currentSection === 3 && (
          <section id="seccion3">
            <h2>Sección 3: Estructuras de Control en JavaScript</h2>
            <p>Las estructuras de control en JavaScript permiten tomar decisiones y repetir acciones.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion3">
              <div className="c-question">
                <p>1. ¿Cuál es la estructura de control que se usa para ejecutar código repetidamente mientras se cumpla una condición en JavaScript?</p>
                <label><input type="radio" name="q1" value="a" /> if...else</label><br />
                <label><input type="radio" name="q1" value="b" /> while</label><br />
                <label><input type="radio" name="q1" value="c" /> for</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se llama el operador lógico "o" en JavaScript?</p>
                <label><input type="radio" name="q2" value="a" /> and</label><br />
                <label><input type="radio" name="q2" value="b" /> ||</label><br />
                <label><input type="radio" name="q2" value="c" /> OR</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(3)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion3">{results[3]}</div>
          </section>
        )}
        {currentSection === 4 && (
          <section id="seccion4">
            <h2>Sección 4: Funciones y Objetos en JavaScript</h2>
            <p>Las funciones y objetos son conceptos fundamentales en JavaScript para organizar y reutilizar código.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion4">
              <div className="c-question">
                <p>1. ¿Cómo se define una función en JavaScript?</p>
                <label><input type="radio" name="q1" value="a" /> function nombreFuncion() {'{}'}</label><br />
                <label><input type="radio" name="q1" value="b" /> function = nombreFuncion() {'{}'}</label><br />
                <label><input type="radio" name="q1" value="c" /> nombreFuncion() {'{}'}</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se accede a una propiedad de un objeto en JavaScript?</p>
                <label><input type="radio" name="q2" value="a" /> objeto.propiedad</label><br />
                <label><input type="radio" name="q2" value="b" /> objeto-propiedad</label><br />
                <label><input type="radio" name="q2" value="c" /> objeto[propiedad]</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(4)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion4">{results[4]}</div>
          </section>
        )}
        {currentSection === 5 && (
          <section id="seccion5">
            <h2>Sección 5: Eventos y DOM en JavaScript</h2>
            <p>Los eventos y el DOM (Document Object Model) permiten interactuar dinámicamente con los elementos de una página web.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion5">
              <div className="c-question">
                <p>1. ¿Qué método se utiliza para agregar un evento a un elemento en JavaScript?</p>
                <label><input type="radio" name="q1" value="a" /> addEventListener()</label><br />
                <label><input type="radio" name="q1" value="b" /> attachEvent()</label><br />
                <label><input type="radio" name="q1" value="c" /> addEvent()</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el objeto principal que representa la estructura de un documento HTML en JavaScript?</p>
                <label><input type="radio" name="q2" value="a" /> document</label><br />
                <label><input type="radio" name="q2" value="b" /> window</label><br />
                <label><input type="radio" name="q2" value="c" /> element</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(5)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion5">{results[5]}</div>
          </section>
        )}
        {currentSection === 6 && (
          <section id="final">
            <h2>¡Felicitaciones!</h2>
            <p>Has completado todas las secciones del curso de JavaScript.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default CursoJavascript;
