import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK, API_URL } from "../utils/urls";
import { useContext } from "react";

const stripePromise = loadStripe(STRIPE_PK);

export default function BuyButton ({ product }) {

    const { user, getToken } = useContext(AuthContext);

    const router = useRouter()

    const handleBuy = async (e) => {
        const stripe = await stripePromise
        const token = await getToken()
        e.preventDefault()
        const res = await fetch(`${API_URL}/orders/`, {
                method: 'POST',
                body: JSON.stringify({ product }),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        })
        const session = await res.json()
        console.log("session", session)

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    }

    const redirectToLogin = async () => {
        router.push('/login')
    }

    return (
        <>
            {!user ?
                <div
                    onClick={redirectToLogin}
                    className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                    Login to buy
                </div>
                :
                <div
                    onClick={handleBuy}
                    className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                    type="submit">
                    Buy { product?.id }
                </div>
            }
        </>
    );
}