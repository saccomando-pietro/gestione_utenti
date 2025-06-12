import UserPage from './components/UserPage';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.container}>
      {/* <div className="button">
        <button type="submit">Entra</button>
      </div> */}
      <UserPage />
    </div>
  );
}

export default App;
