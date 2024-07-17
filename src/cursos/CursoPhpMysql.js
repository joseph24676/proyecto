import React, { useState } from 'react';
import './Curso_c.css';

const CursoPhpMysql = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const answers = {
    1: { q1: 'a', q2: 'b' },
    2: { q1: 'b', q2: 'a' },
    3: { q1: 'a', q2: 'a' },
    4: { q1: 'a', q2: 'b' },
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
        <h1>Curso de PHP y MySQL</h1>
      </header>
      <main className="c-main">
        {currentSection === 1 && (
          <section id="seccion1">
            <h2>Sección 1: Introducción a PHP</h2>
            <p>PHP es un lenguaje de programación de propósito general que se utiliza especialmente para el desarrollo web.</p>
            <h3>Ejemplo de PHP:</h3>
            <pre className="c-pre">
              <code>
                &lt;?php<br />
                echo "Hola, Mundo!";<br />
                ?&gt;
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion1">
              <div className="c-question">
                <p>1. ¿Qué significa PHP?</p>
                <label><input type="radio" name="q1" value="a" /> Hypertext Preprocessor</label><br />
                <label><input type="radio" name="q1" value="b" /> Personal Home Page</label><br />
                <label><input type="radio" name="q1" value="c" /> PHP: Hypertext Preprocessor</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cómo se imprime texto en PHP?</p>
                <label><input type="radio" name="q2" value="a" /> echo "texto";</label><br />
                <label><input type="radio" name="q2" value="b" /> print("texto");</label><br />
                <label><input type="radio" name="q2" value="c" /> printf("texto");</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(1)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion1">{results[1]}</div>
          </section>
        )}
        {currentSection === 2 && (
          <section id="seccion2">
            <h2>Sección 2: Variables y Operadores en PHP</h2>
            <p>PHP utiliza variables para almacenar información y operadores para realizar operaciones en esas variables.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion2">
              <div className="c-question">
                <p>1. ¿Cómo se declara una variable en PHP?</p>
                <label><input type="radio" name="q1" value="a" /> var $variable;</label><br />
                <label><input type="radio" name="q1" value="b" /> $variable;</label><br />
                <label><input type="radio" name="q1" value="c" /> $variable = "valor";</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el operador para la concatenación de cadenas en PHP?</p>
                <label><input type="radio" name="q2" value="a" /> +</label><br />
                <label><input type="radio" name="q2" value="b" /> .</label><br />
                <label><input type="radio" name="q2" value="c" /> &</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(2)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion2">{results[2]}</div>
          </section>
        )}
        {currentSection === 3 && (
          <section id="seccion3">
            <h2>Sección 3: Estructuras de Control en PHP</h2>
            <p>Las estructuras de control en PHP permiten tomar decisiones y ejecutar código repetitivamente.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion3">
              <div className="c-question">
                <p>1. ¿Cuál es la estructura de control para un bucle en PHP?</p>
                <label><input type="radio" name="q1" value="a" /> for</label><br />
                <label><input type="radio" name="q1" value="b" /> foreach</label><br />
                <label><input type="radio" name="q1" value="c" /> while</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es la sintaxis correcta de una declaración condicional en PHP?</p>
                <label><input type="radio" name="q2" value="a" /> if (condición) { };</label><br />
                <label><input type="radio" name="q2" value="b" /> if condición { };</label><br />
                <label><input type="radio" name="q2" value="c" /> if (condición) { };</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(3)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion3">{results[3]}</div>
          </section>
        )}
        {currentSection === 4 && (
          <section id="seccion4">
            <h2>Sección 4: Conexión a MySQL con PHP</h2>
            <p>PHP puede conectarse a bases de datos MySQL para interactuar con datos de manera dinámica.</p>
            <h3>Ejemplo de Conexión a MySQL:</h3>
            <pre className="c-pre">
              <code>
                &lt;?php<br />
                $conn = new mysqli("servidor", "usuario", "contraseña", "base_de_datos");<br />
                if ($conn-connect_error) 
                <br />
                  die("Conexión fallida: " . $conn-connect_error);<br />
                <br />
                echo "Conectado correctamente";<br />
                $conn-close();<br />
                ?&gt;
              </code>
            </pre>
            <h2>Preguntas</h2>
            <form id="quiz-seccion4">
              <div className="c-question">
                <p>1. ¿Cuál es el método correcto para cerrar una conexión MySQL en PHP?</p>
                <label><input type="radio" name="q1" value="a" /> $conn-close();</label><br />
                <label><input type="radio" name="q1" value="b" /> mysqli_close($conn);</label><br />
                <label><input type="radio" name="q1" value="c" /> close($conn);</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Qué función se usa para ejecutar una consulta SQL en PHP?</p>
                <label><input type="radio" name="q2" value="a" /> mysqli_query()</label><br />
                <label><input type="radio" name="q2" value="b" /> mysql_query()</label><br />
                <label><input type="radio" name="q2" value="c" /> query()</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(4)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion4">{results[4]}</div>
          </section>
        )}
        {currentSection === 5 && (
          <section id="seccion5">
            <h2>Sección 5: Consultas y Manejo de Resultados en MySQL con PHP</h2>
            <p>PHP permite realizar consultas a una base de datos MySQL y manejar los resultados obtenidos.</p>
            <h2>Preguntas</h2>
            <form id="quiz-seccion5">
              <div className="c-question">
                <p>1. ¿Qué función de PHP se usa para obtener una fila de resultados de una consulta MySQL?</p>
                <label><input type="radio" name="q1" value="a" /> mysqli_fetch_array()</label><br />
                <label><input type="radio" name="q1" value="b" /> mysql_fetch_row()</label><br />
                <label><input type="radio" name="q1" value="c" /> fetch()</label><br />
              </div>
              <div className="c-question">
                <p>2. ¿Cuál es el método para obtener el número de filas afectadas por una consulta en PHP?</p>
                <label><input type="radio" name="q2" value="a" /> mysqli_num_rows()</label><br />
                <label><input type="radio" name="q2" value="b" /> mysql_affected_rows()</label><br />
                <label><input type="radio" name="q2" value="c" /> num_rows()</label><br />
              </div>
              <button type="button" onClick={() => submitQuiz(5)}>Enviar</button>
            </form>
            <div id="quiz-result-seccion5">{results[5]}</div>
          </section>
        )}
        {currentSection === 6 && (
          <section id="final">
            <h2>¡Felicitaciones!</h2>
            <p>Has completado todas las secciones del curso de PHP y MySQL.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default CursoPhpMysql;
