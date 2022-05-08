import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { API_URL } from "../../utils/urls";
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";
import BuyModal from "../../components/BuyModal";

const ProductPage = ({product}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading product...</div>
    }

    let path = '/';

    const [clientSecret, setClientSecret] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSetModal = (newValue) => {
        setShowModal(newValue);
    }

    const {user, getToken} = useContext(AuthContext);

    async function handleUseProduct(product) {
        if (clientSecret) {
            setShowModal(true)
            return;
        }
        path = window.location.href;

        if (user) {
            const token = await getToken();
            console.log('creating session')
            console.log(product)
            // Create PaymentIntent as soon as the page loads
            await fetch(`${API_URL}/orders/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({product: {id: product.id, name: product.name}}),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .then(setShowModal(true));
        }
    }

    return (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
            <Head>
                <title>{product.title} product</title>
            </Head>
            <div className="rounded-t-lg pt-2 pb-2 m-auto h-full w-full col-span-2">
                <div className="mb-8" id="product-buy-image">
                    <NextImage media={product.image}/>
                </div>
                {product.status === "published" ? (
                    <>
                        {/*  {clientSecret && (*/}
                        {/*    <Elements options={options} stripe={stripePromise}>*/}
                        {/*      <CheckoutForm />*/}
                        {/*    </Elements>*/}
                        {/*)}*/}
                    </>

                ) : (
                    <div className="text-center mr-10 mb-1" v-else>
                        <div
                            className="p-2 bg-emerald-800 items-center text-emerald-100 leading-none lg:rounded-full flex lg:inline-flex"
                            role="alert"
                        >
              <span className="flex rounded-full bg-emerald-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Coming soon...
              </span>
                            <span className="font-semibold mr-2 text-left flex-auto">
                This article is not available yet.
              </span>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full p-5 flex flex-col justify-between">
                <div className="mb-4">
                    <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-100 text-bold">
                        {product.title} - €{product.price}
                    </h4>
                    <div className="mt-1 mb-8 text-gray-200">{product.description}</div>
                    {/*<button*/}
                    {/*    onClick={async () => handleUseProduct(product)}*/}
                    {/*    className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline">*/}
                    {/*     Ik wil dit kopen!*/}
                    {/*</button>*/}
                </div>
            </div>

            {showModal &&
                <BuyModal title={product.title} price={product.price} clientSecret={clientSecret}
                          handleSetModal={handleSetModal}/>
            }
        </div>
    )
}

export default ProductPage

export async function getStaticProps({params}) {
    const product = await getProduct(params.slug)
    return {props: {product}}
}

export async function getStaticPaths() {
    const products = await getProducts()
    return {
        paths: products.map((_product) => {
            return {
                params: {slug: _product.slug},
            }
        }),
        fallback: true,
    }
}


// <button
//     className="snipcart-add-item w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
//     data-item-id={product.id}
//     data-item-price={product.price}
//     data-item-url={router.asPath}
//     data-item-description={product.description}
//     data-item-image={getStrapiMedia(
//         product.image.formats.thumbnail.url
//     )}
//     data-item-name={product.title}
//     v-bind="customFields"
// >
//   Add to cart
// </button>