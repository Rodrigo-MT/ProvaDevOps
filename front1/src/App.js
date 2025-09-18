import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quartos from "./pages/Quartos/Quartos";
import CadastroQuartos from "./pages/CadastroQuartos/CadastroQuartos";
import { FaBed } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo"><FaBed /> Quartos de Hotel</h1>
          <nav>
            <Link to="/">Quartos</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Quartos />} />
            <Route path="/cadastro" element={<CadastroQuartos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
