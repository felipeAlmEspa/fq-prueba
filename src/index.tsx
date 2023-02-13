import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error/PageNoFound';
import HomePage from './pages/home';
import { ChakraProvider } from '@chakra-ui/react';
import PokemonPage from './pages/pokemon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        path: "home",
        element: <HomePage />,
      },
      {
        path: "pokemon",
        element: <PokemonPage />,
      },
    ],
    errorElement: <ErrorPage/>,

  },
 
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
      
    </QueryClientProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
