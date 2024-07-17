import React, { useState } from 'react';
import './Curso_c.css';

const answers = {
  1: { q1: 'a', q2: 'c' },
  2: { q1: 'a', q2: 'b' },
  3: { q1: 'a', q2: 'a' },
  4: { q1: 'c', q2: 'b' },
  5: { q1: 'a', q2: 'a' },
};

const sections = [
  {
    id: 1,
    title: "Introducción a C",
    content: (
      <>
        <p>C es un lenguaje de programación de propósito general que se utiliza ampliamente en el desarrollo de sistemas y aplicaciones.</p>
        <h3>Ejemplo de C:</h3>
        <pre className="c-pre">
          <code>
            #include &lt;stdio.h&gt;{`\n`}
            int main() {`{`}\n
            printf("Hola, Mundo!\n");{`\n`}
            return 0;{`\n`}
            {`}`}
          </code>
        </pre>
      </>
    ),
    questions: [
      { question: "¿Qué es C?", options: ["Un lenguaje de programación", "Un sistema operativo", "Un navegador web"], correct: 'a' },
      { question: "¿Cómo se imprime un mensaje en C?", options: ['System.out.println("Hola, Mundo!")', 'print("Hola, Mundo!")', 'printf("Hola, Mundo!")'], correct: 'c' }
    ]
  },
  {
    id: 2,
    title: "Variables y Tipos de Datos",
    content: (
      <>
        <p>En C, puedes almacenar valores en variables y trabajar con diferentes tipos de datos.</p>
      </>
    ),
    questions: [
      { question: "¿Cómo defines una variable en C?", options: ["int x = 5;", "x = 5;", "var x = 5;"], correct: 'a' },
      { question: "¿Cuál es el tipo de dato de \"Hola, Mundo!\"?", options: ["Entero", "Cadena", "Flotante"], correct: 'b' }
    ]
  },
  {
    id: 3,
    title: "Estructuras de Control",
    content: (
      <>
        <p>Aprende a usar estructuras de control como if, for y while en C.</p>
      </>
    ),
    questions: [
      { question: "¿Cuál es la sintaxis correcta para una declaración if en C?", options: ["if (x > 0) {}", "if x > 0;", "if x > 0 then"], correct: 'a' },
      { question: "¿Cuál es la sintaxis correcta para un bucle for en C?", options: ["for (int i = 0; i < 10; i++)", "for i in range(10):", "foreach i in range(10)"], correct: 'a' }
    ]
  },
  {
    id: 4,
    title: "Funciones en C",
    content: (
      <>
        <p>Las funciones te permiten reutilizar código y organizar tu programa en bloques manejables.</p>
      </>
    ),
    questions: [
      { question: "¿Cómo defines una función en C?", options: ["function mi_funcion()", "def mi_funcion()", "void mi_funcion()"], correct: 'c' },
      { question: "¿Cómo llamas a una función en C?", options: ["llamar(mi_funcion)", "mi_funcion()", "ejecutar(mi_funcion)"], correct: 'b' }
    ]
  },
  {
    id: 5,
    title: "Manejo de Archivos",
    content: (
      <>
        <p>Aprende a leer y escribir archivos en C para manejar datos de manera eficiente.</p>
      </>
    ),
    questions: [
      { question: "¿Qué función se usa para abrir un archivo en C?", options: ["fopen()", "file_open()", "open_file()"], correct: 'a' },
      { question: "¿Qué método se usa para leer todo el contenido de un archivo en una sola cadena?", options: ["fread()", "read_all()", "readfile()"], correct: 'a' }
    ]
  },
];

function Quiz({ section, onSubmit }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleChange = (e) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(section.id, selectedAnswers);
  };

  return (
    <form>
      {section.questions.map((q, idx) => (
        <div className="c-question" key={idx}>
          <p>{idx + 1}. {q.question}</p>
          {q.options.map((opt, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`q${idx + 1}`}
                value={String.fromCharCode(97 + i)}
                onChange={handleChange}
              /> {opt}
              <br />
            </label>
          ))}
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

function CursoC() {
  const [currentSection, setCurrentSection] = useState(1);
  const [results, setResults] = useState({});

  const handleQuizSubmit = (sectionId, selectedAnswers) => {
    let score = 0;
    const totalQuestions = sections.find(sec => sec.id === sectionId).questions.length;

    Object.keys(selectedAnswers).forEach((key) => {
      if (selectedAnswers[key] === answers[sectionId][key]) {
        score++;
      }
    });

    setResults({
      ...results,
      [sectionId]: { score, total: totalQuestions },
    });

    if (score === totalQuestions && sectionId < sections.length) {
      setCurrentSection(sectionId + 1);
    } else if (score === totalQuestions && sectionId === sections.length) {
      setCurrentSection('final');
    }
  };

  return (
    <div className="c-body">
      <header className="c-header">
        <h1>Fundamentos de C</h1>
      </header>
      <main className="c-main">
        {sections.map((section) => (
          <section key={section.id} style={{ display: currentSection === section.id ? 'block' : 'none' }}>
            <h2>{`Sección ${section.id}: ${section.title}`}</h2>
            {section.content}
            <h2>Preguntas</h2>
            <Quiz section={section} onSubmit={handleQuizSubmit} />
            {results[section.id] && (
              <div id={`quiz-result-seccion${section.id}`}>
                Tu puntuación es: {results[section.id].score} de {results[section.id].total}. {results[section.id].score === results[section.id].total ? '¡Has completado esta sección!' : 'Debes responder correctamente todas las preguntas para avanzar.'}
              </div>
            )}
          </section>
        ))}
        <section id="final" style={{ display: currentSection === 'final' ? 'block' : 'none' }}>
          <h2>¡Felicitaciones!</h2>
          <p>Has completado todas las secciones del curso de Fundamentos de C.</p>
        </section>
      </main>
    </div>
  );
}

export default CursoC;
