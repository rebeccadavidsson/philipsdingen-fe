import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { useEffect, useState } from "react";
import BuyModal from "../../components/BuyModal";
import { useTheme } from "next-themes";

const ProductPage = ({product}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading product...</div>
    }

    const {theme} = useTheme();
    const [textColorCodes, setTextColorCodes] = useState({primary: 800, secondary: 700});
    useEffect(() => {
        setTextColorCodes(theme === 'dark' ? {primary: 100, secondary: 300} : {primary: 800, secondary: 700})
    }, [theme])

    const [showModal, setShowModal] = useState(false);

    const handleSetModal = (newValue) => {
        setShowModal(newValue);
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
            <div className="w-full p-5 flex flex-col justwify-between">
                <div className="mb-4">
                    <h4 className={`mt-1 font-semibold text-lg leading-tight truncate text-bold text-gray-${textColorCodes.primary}`}>
                        {product.title} - €{product.price}
                    </h4>
                    <div className={`mt-1 mb-8 text-gray-${textColorCodes.secondary}`}>{product.description}</div>

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
