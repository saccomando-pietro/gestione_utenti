import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import UpdateUser from "./components/UpdateUser";

function App() {
  const API_URL = "http://localhost:8090/api/users";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPage url={API_URL} />} />
        <Route path="/users/update/:id" element={<UpdateUser url={API_URL} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
