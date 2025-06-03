import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import FindRoommate from "./Pages/FindRoommate.jsx";
import MyListing from "./Pages/MyListing.jsx";
import BrowseListing from "./Pages/BrowseListing.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import Error from "./Pages/Error.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";
import FeaturedSection from "./Components/FeaturedSection.jsx";
import UpdatePost from "./Components/UpdatePost.jsx";
import Loading from "./Components/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
         loader: ()=>fetch('https://b11a10-server-side-sariakhatun.vercel.app/featured-rooms'),
         hydrateFallbackElement: <Loading></Loading>
        
      },
      {
        path: "/roommate",
        element: (
          <PrivateRoute>
            <FindRoommate></FindRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/myListing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://b11a10-server-side-sariakhatun.vercel.app/rooms"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/browseListing",
        element: <BrowseListing></BrowseListing>,
        loader: () =>
          fetch("https://b11a10-server-side-sariakhatun.vercel.app/rooms"),
        hydrateFallbackElement:<Loading></Loading>
      },

      {
        path: "/detailsPage/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b11a10-server-side-sariakhatun.vercel.app/rooms/${params.id}`
          ),
          hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/updatePost/:id",
        element: (
         
          <PrivateRoute>
              <UpdatePost></UpdatePost>
          </PrivateRoute>
         
        ),
        loader: ({params})=>fetch(`https://b11a10-server-side-sariakhatun.vercel.app/rooms/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
