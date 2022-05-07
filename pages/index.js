import { getProducts } from "../utils/api"
import Link from "next/link"
import NextImage from "../components/Image"

// import required modules
import { EffectCoverflow, EffectCube, Pagination, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cube";
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"

const HomePage = ({products}) => {

    function getElements() {
        return <>
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
        </>;
    }

    return (
        <div className="md:mt-24 mt-2 h-auto container">
            <h2 className="title-large text-left text-gray-100 ">Titel van mijn galerij</h2>
            <p className="text-left text-gray-400 w-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <div id="swiper-wrapper" className="h-full mt-12">
                <div className="md:hidden">
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        pagination={true}
                        modules={[EffectCube, Autoplay, Pagination]}
                    >
                        {getElements()}
                    </Swiper>
                    <div className="flex justify-end mt-6">
                        <NextImage width={25} height={25} src={'/swipe-to-right.png'}/>
                    </div>
                </div>
                <div className="hidden md:block">
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
                        {getElements()}
                    </Swiper>
                </div>
            </div>


            <section className="mt-32 md:mt-64 px-0 md:px-12" id="section-homepage">
                <div
                    className="justify-center h-full flex grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="md:col-span-1 shadow-image">
                        <NextImage src={'/hoofd-robot.jpeg'} height={400} width={400}/>
                    </div>

                    <div className="w-full h-full md:col-span-1">
                        <h1 className="title-large text-zinc-600">Titel van deze tekst</h1>
                        <p className="text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-32 md:mt-64 px-0 md:px-12" id="section-homepage">
                <div
                    className="justify-center h-full flex grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="w-full h-full md:col-span-1">
                        <h1 className="title-large text-zinc-600">Titel van deze tekst</h1>
                        <p className="text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                    <div className="md:col-span-1 shadow-image">
                        <NextImage src={'/hoofd-robot.jpeg'} height={500} width={500}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const products = await getProducts()
    return {props: {products}}
}

export default HomePage
