import { useContext, useState, useEffect } from "react"
import NextImage from "../components/Image"
import Link from "next/link"
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

    return { orders, loading }
}

const Account = () => {
    const { user, logoutUser, getToken } = useContext(AuthContext)

    const { orders, loading } = useOrders(user, getToken)
    const Panda = (
        <NextImage src="/panda.png" alt="panda" height="200" width="200" />
    )

    const outerClasses = "container mt-5 flex flex-row justify-between"

    if (!user) {
        return (
            <div className={outerClasses}>
                <div>
                    <p className="text-xl text-slate-800">
                        Please Login or Register before accessing this page
                    </p>
                    <Link href="/">
                        <a>Go Back</a>
                    </Link>
                </div>
                {Panda}
            </div>
        )
    }

    return (
        <div className={outerClasses}>
          <div>
            <Head>
              <title>Account</title>
              <meta name="description" content="Your orders will be shown here" />
            </Head>
            <h2 className="title-large">Account</h2>
            <hr />
            <div className="flex flex-row">
              <p className="mr-1">Email</p>
              <p>{user.email}</p>
            </div>

            <h3>Your Orders</h3>
            {loading && <p>Orders are Loading</p>}
            {orders.map((order) => (
              <div key={order.id}>
                {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
                {order.product.name} €{order.total} {order.status}

                <div className="rounded-t-lg pt-2 pb-2 m-auto h-96 w-96">
                  <NextImage media={order.product.image} />
                </div>
                <div className="w-full p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
                      {order.product.title} - €{order.product.price}
                    </h4>
                    <div className="mt-1 text-gray-600">{order.product.description}</div>
                  </div>
                </div>
              </div>
            ))}
            <hr />

            <p>
              <a href="#" onClick={logoutUser}>
                Logout
              </a>
            </p>
          </div>
        </div>
    )
}
export default Account
