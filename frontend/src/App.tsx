import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import Login from "../src/pages/auth/login/Login";
import Register from "../src/pages/auth/register/Register";
import ForgotPassword from "../src/pages/auth/forgetpassword/ForgetPassword";
import VerifyResetCode from "../src/pages/auth/verifyresetcode/VerifyResetCode";
import ResetPassword from "../src/pages/auth/resetpassword/ResetPassword";
import CustomerDashboard from "../src/pages/dashboard/CustomerDashboard/CustomerDashboard";
import TechnicianDashboard from "../src/pages/dashboard/TechnicianDashboard/TechnicianDashboard";
import AdminDashboard from "../src/pages/dashboard/AdminDashboard/AdminDashboard";

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
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-reset-code",
    element: <VerifyResetCode />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/customer-dashboard",
    element: <CustomerDashboard />,
  },
  {
    path: "/technician-dashboard",
    element: <TechnicianDashboard />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;