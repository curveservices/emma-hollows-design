import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoadingSpinner from './components/loadingSpinner/index.jsx';
import Layout from "./layout/main/index.jsx";
import Home from "./pages/home/index.jsx"
import About from "./pages/about/index.jsx";
import Portfolio from "./pages/portfolio/index.jsx";
import NotFound from './pages/404/index.jsx';
import Designer from "./pages/designer/index.jsx";
import Maker from "./pages/maker/index.jsx";
import Wardrobe from "./pages/wardrobe/index.jsx";
import Film from "./pages/film/index.jsx";
import "./App.scss";
import CV from "./pages/cv/index.jsx";
import Contact from "./pages/contact/index.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner/>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="about-me" element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        }
        />
        <Route path="portfolio" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio/>
          </Suspense>
        }
        />
        <Route path="cv" element={
          <Suspense fallback={<LoadingSpinner />}>
            <CV/>
          </Suspense>
        }
        />
        <Route path="contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact/>
          </Suspense>
        }
        />
        <Route path=":id/designer" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Designer/>
          </Suspense>
        }
        />
        <Route path=":id/maker" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Maker />
          </Suspense>
        }
        />
        <Route path=":id/wardrobe" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Wardrobe />
          </Suspense>
        }
        />
        <Route path=":id/film" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Film/>
          </Suspense>
        }
        />
      </Route>
      <Route path="*" element={
        <Suspense fallback={<LoadingSpinner />}>
          <NotFound/>
        </Suspense>
      }
      />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
