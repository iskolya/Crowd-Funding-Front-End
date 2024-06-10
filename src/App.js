import logo from './logo.svg';
import LoginForm from './Components/LoginForm/LoginForm'
import Navbar from './Components/Navbar/Navbar';
import RegistrForm from './Components/RegisterForm/RegistrForm';
import LoginPage from './Pages/LoginPage';
import RegistrPage from './Pages/RegistrPage';
import ContactPage from './Pages/ContactPage';
import Faq from './Components/FAQ/Faq';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/Login",
    element: <LoginPage/>
  },
  {
    path:"/Register",
    element: <RegistrPage/>
  }
]);


function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      <RouterProvider router={router} />

    </div>
    
  );
}

export default App;
