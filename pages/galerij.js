import Head from "next/head"
import { getProducts } from "../utils/api"
import ProductsGallery from "../components/ProductsGallery";
import ProductsList from "../components/ProductsList"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Philipsdingen</title>
      </Head>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage




