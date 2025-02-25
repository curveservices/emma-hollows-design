import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/home/index.jsx'));
import Layout from './layout/main/index.jsx';
import './App.scss'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
      </Route>
    </>
  ),
);

function App() {
  return <RouterProvider router={router} />
}

export default App;
