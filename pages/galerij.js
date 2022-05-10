import Head from "next/head"
import { getProducts } from "../utils/api"
// import ProductsList from "../components/ProductsList"
import ProductsGallery from "../components/ProductsGallery";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Philipsdingen</title>
      </Head>
      <ProductsGallery products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage




