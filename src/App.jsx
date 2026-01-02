import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import  { AppLayout } from "./components/Layout/AppLayout.jsx"
import "./App.css"
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Contact }  from './pages/Contact.jsx'
import { Country } from './pages/Country.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "country",
    element: <Country />
  }
    ]
  }
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router = {router} > </RouterProvider>;
    </div>
  )
}

export default App;