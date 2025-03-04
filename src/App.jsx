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

import "./App.scss";

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
