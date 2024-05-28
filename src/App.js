// React router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Pages
import Contact from './pages/Contact';
import Error from './pages/Error';
import About from './pages/About';
import PrivacyAndSupport from "./pages/PrivacyAndSupport";
import Projects from "./pages/Projects";
import Homepage from "./pages/Homepage";


// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


const options = {
  basename: "/marin-durand",
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
        element: <Homepage/>,
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
      {
        path: "/projects",
        element: <Projects/>,
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