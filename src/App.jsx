import { useState } from 'react'
import './assets/App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import useVH from 'react-viewport-height';
import { ThemeProvider } from 'react-bootstrap';
import FactoryPage from './pages/FactoryPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingletonPage from './pages/SingletonPage';
import DecoratorPage from './pages/DecoratorPage';
import ObserverPage from './pages/ObserverPage';
import StrategyPage from './pages/StrategyPage';


function App() {
  useVH();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/factory', element: <FactoryPage /> },
        { path: '/singleton', element: <SingletonPage /> },
        { path: '/decorator', element: <DecoratorPage /> },
        { path: '/observer', element: <ObserverPage /> },
        { path: '/strategy', element: <StrategyPage /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        position={'top-center'}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme={'dark'}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
