import { Routes, Route } from 'react-router-dom';
import './App.css';
import Principal from './componentes/Principal';
import Inicio from './componentes/Inicio';
import Registro from './componentes/Registro';
import Cursos from './componentes/Cursos';
import Detallecurso from './componentes/Detallecurso';
import Miscursos from './componentes/Miscursos';
import Perfil from './componentes/Perfil';
import CursoC from './cursos/CursoC';
import CursoHtml from './cursos/CursoHtml';
import CursoCss from './cursos/CursoCss';
import CursoPython from './cursos/CursoPython';
import CursoPhpMysql from './cursos/CursoPhpMysql';
import CursoJavascript from './cursos/CursoJavascript';









function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/detallecurso" element={<Detallecurso />} />
        <Route path="/miscursos" element={<Miscursos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/curso/c" element={<CursoC/>} />
        <Route path="/curso/html" element={<CursoHtml/>} />
        <Route path="/curso/css" element={<CursoCss/>} />
        <Route path="/curso/python" element={<CursoPython/>} />
        <Route path="/curso/phpmysql" element={<CursoPhpMysql/>} />
        <Route path="/curso/javascript" element={<CursoJavascript/>} />




      </Routes>
    </div>
  );
}

export default App;
