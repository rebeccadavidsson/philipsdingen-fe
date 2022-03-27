import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Footer = () => {
    const { logoutUser } = useContext(AuthContext)

  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-bold text-white">
        Philip Davidsson - 2022
      </p>
      <div className="flex">
          <button
              href="#" onClick={logoutUser}
              className="w-full px-4 py-2 font-bold text-white bg-yellow-500 opacity-70 hover:opacity-100 rounded hover:bg-yellow-500 focus:outline-none focus:shadow-outline"
              type="submit"
          >
              Logout
          </button>
      </div>
    </div>
  )
}

export default Footer
