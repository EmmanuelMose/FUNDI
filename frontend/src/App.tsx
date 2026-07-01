import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import Login from "../src/pages/auth/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;