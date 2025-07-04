import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UpdateUser from "./components/users/UpdateUser";
import UserPage from "./components/users/UserPage";
import { API_URL } from "./utils/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPage url={API_URL} />} />
        <Route
          path="/users/update/:id"
          element={<UpdateUser url={API_URL} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
