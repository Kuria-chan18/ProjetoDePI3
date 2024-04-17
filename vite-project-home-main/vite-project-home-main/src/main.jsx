
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

import * as React from "react"
import * as ReactDOM from "react-dom/client"
import Home from './components/Home'
import Sobre from './components/Sobre'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Ajuda from './components/Ajuda'



// configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login'
import LoginSucesso from './components/LoginSucesso'



//const router = createBrowserRouter([
 // {
 //   path: "/",
 //   element: <Home/>,
//  },
 // {
 //   path: "sobre",
//    element: <Sobre/>,
  //}
//])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "sobre",
          element: <Sobre/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "ajuda",
          element:<Ajuda/>
        },
        {
          path: "loginSucesso",
          element: <LoginSucesso/>
        }
        // nested routes - identificador unico
      ],
    },
  ]);

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
