import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddQuiz from "../screens/addquiz";
import DisplayQuiz from "../screens/displayquiz";
import Login from "../screens/login";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="addquiz">Add Quiz</Link>{" "}
            </li>
            <li>
              <Link to="displayquiz">Display Quiz</Link>{" "}
            </li>
            <li>
              <Link to="login">Login</Link>{" "}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="displayquiz" element={<DisplayQuiz />} />
          <Route path="addquiz" element={<AddQuiz />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;
