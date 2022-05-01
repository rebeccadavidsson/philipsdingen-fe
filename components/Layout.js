import React from "react";
import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarTest from "./NavbarTest"

import { STRIPE_PK } from "../utils/urls";
import { loadStripe } from "@stripe/stripe-js";

const Layout = ({ children, categories }) => {

  return (
    <div className="flex justify-center bg-stone-900 font-lato background-image">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <NavbarTest />
    
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

