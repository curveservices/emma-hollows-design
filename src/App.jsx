import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const Home = React.lazy(() => import("./pages/home/index.jsx"));
import LoadingSpinner from './components/loadingSpinner/index.jsx';
import Layout from "./layout/main/index.jsx";
import "./App.scss";
import About from "./pages/about/index.jsx";

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
      </Route>

    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
