import Head from "next/head"
import { getProducts } from "../utils/api"
import ProductsGallery from "../components/ProductsGallery"
import Link from "next/link"
import NextImage from "../components/Image"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"

const HomePage = ({ products }) => {
  return (
    <div className="mt-24 h-auto container">
      <h2 className="title-large text-left text-gray-100 ">Titel van mijn galerij</h2>
      <p className="text-left text-gray-400 w-auto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div id="swiper-wrapper" className="h-full mt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {products.map((_product) => (
            <SwiperSlide key={_product.id}>
              <Link href={`/products/${_product.slug}`}>
                <NextImage
                  media={_product.image}
                  height={1600}
                  width={1300}
                  objectFit={"cover"}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage
