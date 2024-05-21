// React router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';
import About from './pages/About';
import PrivacyAndSupport from "./pages/PrivacyAndSupport";

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Homepage from "./pages/Homepage";


const options = {
  basename: "/",
};

// Layout
const Layout = () => {
  return (
    <>
      <Navigation />
      <ScrollToTop/>
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <Homepage/>
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: <PrivacyAndSupport />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, options);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;