import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import FindRoommate from './Pages/FindRoommate.jsx';
import MyListing from './Pages/MyListing.jsx';
import BrowseListing from './Pages/BrowseListing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
        path:'/',
        element:<Home></Home>
      },
      {
       
        path:'/roommate',
        element:<FindRoommate></FindRoommate>
      },
      {
       
        path:'/myListing',
        element:<MyListing></MyListing>
      },
      {
       
        path:'/browseListing',
        element:<BrowseListing></BrowseListing>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>
   
   </RouterProvider>
  </StrictMode>,
)
