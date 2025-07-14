import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UpdateUser from "./components/users/UpdateUser";
import UserPage from "./components/users/UserPage";
import UpdateProject from "./components/projects/UpdateProject";
import ProjectPage from "./components/projects/ProjectPage";
import { USERS_API_URL, PROJECTS_API_URL } from "./utils/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPage url={USERS_API_URL} />} />
        <Route
          path="/user/update/:id"
          element={<UpdateUser url={USERS_API_URL} />}
        />
        <Route path="/projects" element={<ProjectPage url={PROJECTS_API_URL} />} />
        <Route
          path="/project/update/:id"
          element={<UpdateProject url={PROJECTS_API_URL} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
