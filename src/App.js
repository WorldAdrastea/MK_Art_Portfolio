import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "Portfolio",
    element: (
      <Portfolio />
    ),
  },
  {
    path: "About",
    element: (
      <About />
    ),
  },
  {
    path: "Contact",
    element: (
      <Contact />
    ),
  },
])

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
