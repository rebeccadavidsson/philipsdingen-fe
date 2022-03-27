import { useContext } from "react"
import Link from "next/link"
import NextImage from "./Image"

import AuthContext from "../context/AuthContext"

const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a className="xs:w-3/5">
          <NextImage
            src="/logo.png"
            alt="home"
            className="logo"
            height="80"
            width="250"
          />
        </a>
      </Link>


      <div>
        <div className="flex items-center">
          <button className="p-3 m-2 text-gray-300 xs:p-0 xs:m-0">
            {user ? (
              <Link href="/account">
              Account</Link>
            ) : (
              <Link href="/account">
                <a className={"text-white"}>Log in</a>
              </Link>
            )}
          </button>

          <button className="snipcart-checkout flex items-center flex-col p-3 m-2">
            <NextImage height="20" width="20" src="/shopping-cart.png" alt="Cart" />
            {/* <span className="snipcart-total-price font-semibold text-sm text-indigo-500"></span> */}
          </button>
        </div>  
      </div>
    </div>
  )
}

export default Navbar
