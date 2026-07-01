import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;