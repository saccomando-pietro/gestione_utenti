import { useNavigate } from "react-router-dom";
import "../App.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <h1>Seleziona l'entità che vuoi modificare</h1>
        <ul className="lista-entita">
          <li>
            <h2 onClick={() => navigate("/users")}>Utenti</h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
