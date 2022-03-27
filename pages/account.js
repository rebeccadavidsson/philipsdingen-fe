import { useContext, useState, useEffect } from "react"
import NextImage from "../components/Image"
import Head from "next/head"

import AuthContext from "../context/AuthContext"
import { API_URL } from "../utils/urls"

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            if (user) {
                try {
                    const token = await getToken()
                    const orderRes = await fetch(`${API_URL}/orders`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    const data = await orderRes.json()
                    setOrders(data)
                } catch (err) {
                    setOrders([])
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])

    return {orders, loading}
}

const Account = () => {
    const {user, getToken} = useContext(AuthContext)
    const {orders} = useOrders(user, getToken)
    console.log(orders)
    const [input, setInput] = useState("")
    const {loginUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(input)
    }

    if (!user) {
        return (
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-md">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{backgroundImage: "url('steen.png')"}}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none xs:p-2">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl text-black">Login</h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    Please Login with your e-mail address before accessing this page.
                                    A link will be sent to your e-mail.
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded xs:px-4" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full h-12 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Enter Email Address..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Login with magic link
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                                <div className="text-center text-xs">
                                    <p>Did not receive an e-mail? Try waiting a few minutes.</p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Account</title>
                <meta name="description" content="Your orders will be shown here"/>
            </Head>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12 shadow shadow-lg xs:px-0">
                    <div
                        className="bg-white w-full md:w-3/4 lg:w-11/12 flex shadow-md text-gray-800 rounded rounded-lg h-auto"
                        style={{minHeight: '600px'}}>
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/3 bg-cover rounded-l-lg p-12 text-center"
                            style={{backgroundImage: "url('steen.png')"}}
                        >
                        </div>
                        <div
                            className="p-12 text-center w-full lg:w-2/3 bg-white p-5 rounded-lg lg:rounded-l-none xs:p-6"
                            style={{filter: 'drop-shadow(2px 2px 6px black)'}}>

                            <h3 className="title-large">Your Orders</h3>
                            <hr/>
                            <br/>

                            {orders.length > 0 ?
                            <div>
                            <div className="flex flex-row justify-between">
                                <p className="mr-1 font-bold text-gray-900">Profile</p>
                                <p className="text-gray-500 mb-3">{user.email}</p>
                            </div>

                            {orders.map((order) => (
                                <div key={order.id}>
                                    <div className="flex flex-row justify-between">
                                        <p className="mr-1 font-bold text-gray-900">Order date</p>
                                        <p className="text-gray-500 mb-4"> {new Date(order.created_at).toLocaleDateString("nl-NL")}{" "}</p>
                                    </div>
                                    {order.Status === 'Paid' && <div className="flex flex-row justify-between">
                                        <p className="mr-1 font-bold text-gray-900">Paid at</p>
                                        <p className="text-gray-500 mb-4"> {new Date(order.published_at).toLocaleDateString("nl-NL")}{" "}</p>
                                    </div>}
                                    <div className="p-6 m-auto h-full w-full flex mb-8 mt-4 rounded-xl bg-stone-100">
                                        <div className="w-1/2 rounded mr-6">
                                            <NextImage media={order.product.image} width={40} height={40}/>
                                        </div>
                                        <div className="w-full text-left">
                                            <h4 className="font-semibold text-lg leading-tight truncate text-gray-700 flex justify-between">
                                                <p className="font-bold text-gray-900">{order.product.title}</p>
                                                <p className="text-gray-500"> € {order.product.price}</p>
                                            </h4>
                                            <div className="mt-1 text-gray-600 mb-2">{order.product.description}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-between mt-6 text-lg">
                                        <p className=" mr-1 font-bold text-gray-900">Total</p>
                                        <p className="text-gray-500 mb-3 ">€ {order.Total}</p>
                                    </div>
                                    {orders.length > 1 && <hr className="mt-4 mb-4"/>}
                                </div>

                            ))}
                            </div> :
                            <div className="mt-8">
                                <div className="mr-8 mb-4">
                                <NextImage src={'/shopping-cart.png'} width={250} height={250}/>
                                </div>
                                <p className="text-gray-400 text-xs">No orders yet...</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Account
