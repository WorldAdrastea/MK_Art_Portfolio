import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MainView from './components/MainView/MainView';
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
      <MainView />
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
