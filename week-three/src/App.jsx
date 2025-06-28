import React from 'react'
import Card from './components/Card'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/Footer';
let router = createBrowserRouter([
    {
        path: "/",
        element: <div className="flex-1 flex flex-col">
         <Navbar />
         <main className="flex-1">
           <Home />
         </main>
         <Footer />
         </div>
    },
    {
        path: "/about",
        element: <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <About />
          </main>
          <Footer />
          </div>
    },
    {
        path: "/contact",
        element: <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Contact />
          </main>
          <Footer />
          </div>
    }
])
export default function App() {
  return(
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
      <RouterProvider router={router} />
    </div>
  )
}