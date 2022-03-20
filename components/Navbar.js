import { useContext } from "react"
import Link from "next/link"
import NextImage from "./Image"

import AuthContext from "../context/AuthContext"

const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <NextImage
            src="/logo.png"
            alt="home"
            className="logo"
            height="100"
            width="150"
          />
        </a>
      </Link>


      <div>
        <div className="flex items-center">
          <div className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md p-3 m-2">
            {user ? (
              <Link href="/account">{user.email}</Link>
            ) : (
              <Link href="/login">
                <a> Log in</a>
              </Link>
            )}
          </div>

          <button className="snipcart-checkout flex items-center flex-col border rounded-lg bg-gray-100 hover:shadow-lg shadow-md p-3 m-2">
            <NextImage height="20" width="20" src="/shopping-cart.png" alt="Cart" />
            {/* <span className="snipcart-total-price font-semibold text-sm text-indigo-500"></span> */}
          </button>
        </div>  
      </div>
    </div>
  )
}

export default Navbar
