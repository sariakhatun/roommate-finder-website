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
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';

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
      {
       
        path:'/login',
        element:<Login></Login>
      },
      {
       
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router}>
   
   </RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
