import Head from "next/head"
import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"

export default function Login() {
  const [input, setInput] = useState("")
  const { loginUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(input)
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>

      <form onSubmit={handleSubmit} class="flex justify-start mt-12 md:justify-center w-full">
        <div class="shadow-md flex-auto max-w-lg p-10 pb-20">
          <div class="w-full">
            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              <span class="text-red-400 mr-1">*</span> Email
            </div>
            <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
              <input
                class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="email"
                placeholder="Email address..."

              />{" "}
            </div>
          </div>
          <div class="mt-6 relative">
            <button
                type="submit"
              class="shadow-md font-small py-2 px-4 text-white
                  cursor-pointer bg-indigo-600 rounded text-md tr-mt absolute text-center w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
