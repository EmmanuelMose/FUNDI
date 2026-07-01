import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import Login from "../src/pages/auth/login/Login";
import Register from "../src/pages/auth/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;