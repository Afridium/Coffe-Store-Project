import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeDetails from './components/CoffeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader: () => fetch('http://localhost:5000/coffees'),
        Component:Home
      },
      {
        path: "/addCoffee",
        Component: AddCoffee
      },
      {
        path:"/updateCoffee/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`).then(res => res.json()),
        Component: UpdateCoffee
      },
      {
        path:"/coffeeDetails/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`).then(res => res.json()),
        Component: CoffeDetails
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
