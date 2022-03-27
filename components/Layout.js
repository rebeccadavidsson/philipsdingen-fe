import React, { useEffect } from "react";
import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories }) => {

  let path = '/';
  useEffect(() => {
    path = window.location.href;
  })
  
  return (
    <div className="flex justify-center bg-stone-900 font-lato background-image">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
        { path !== '/' && <CategoryButtons categories={categories} />}
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout

