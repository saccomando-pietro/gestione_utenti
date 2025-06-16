import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserPage from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
