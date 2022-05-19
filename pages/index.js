import { getProducts } from "../utils/api"
import Link from "next/link"
import NextImage from "../components/Image"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

import Fade from 'react-reveal/Fade';
import bloemen from '../public/bloemen.png';
import bloemenOptimized from '../public/min-bloemen.png';
import steenOptimized from '../public/min-steen.png';
import groenOptimized from '../public/min-groen.png';
import groen from '../public/groen.png';


const HomePage = () => {

    const {theme} = useTheme();
    const [textColorCodes, setTextColorCodes] = useState({primary: 600, secondary: 600});
    useEffect(() => {
        setTextColorCodes(theme === 'dark' ? {primary: 500, secondary: 600} : {primary: 800, secondary: 700})
    }, [theme])


    const homepageImages = [{
        image: bloemen,
        blurImage: bloemenOptimized
    }, {
        image: steenOptimized,
        blurImage: steenOptimized
    }, {
        image: groen,
        blurImage: groenOptimized
    }];

    function getElements() {
        return <>
            {homepageImages.map((_product, index) => (
                <SwiperSlide key={index}>
                    <NextImage
                        blurDataUrl={_product.blurImage}
                        src={_product.image}
                        width={400}
                        height={600}
                        objectFit={"cover"}
                        priority={true}
                    />
                </SwiperSlide>
            ))}
        </>;
    }

    return (
        <div className="md:mt-24 mt-2 h-auto container">
            <div>
                <div className={"md:p-8"}>
                    <h2 className={`title-large text-left text-zinc-${textColorCodes.secondary}`}>Philip's galerij</h2>
                    <p className={`text-left w-auto text-zinc-${textColorCodes.secondary}`}>
                        Ik heb eigenlijk te weinig schilder-doeken om meer schilderijen te maken dus hier zie je er nu
                        maar 3. Maar eigenlijk zijn dat er dus 20 ongeveer. Ik maak ook soms tekeningen. Soms.
                    </p>
                </div>
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
                                delay: 15500,
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
            </div>


            <section className="mt-32 md:mt-64 px-0 md:px-12 section-with-background" id="section-homepage">
                <div
                    className="justify-center h-full flex grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="md:col-span-1 shadow-image">
                        <NextImage src={'/bloemen.png'} height={600} width={400}/>
                    </div>

                    <div className="w-full h-full md:col-span-1 flex">
                        <Fade bottom cascade>
                            <div className={"relative w-full h-full m-auto lg:m-0 lg:w-2/3 lg:mt-8 text-left"}>
                                <h1 className={`title-large text-zinc-${textColorCodes.secondary}`}>Bos Bloemen</h1>
                                <p className={`text-zinc-${textColorCodes.secondary + 100}`}>
                                    Stiekem bestaat dit schilderij al uit tienduizend schilderijen omdat
                                    ik altijd over mijn schilderijen heen schilder.
                                </p>
                                <div
                                    className={`underline-animation hidden md:block mt-8 justify-end  py-2 font-bold float-left hover:cursor-pointer text-zinc-${textColorCodes.secondary + 100}`}>
                                    <Link href="/over-mij" to={"/over-mij"}>
                                        <span>Over mij</span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            <div className={"animated-shapes-under"}></div>

            <section className="relative mt-32 md:mt-64 px-0 md:px-12 mb-12" id="section-homepage">
                <div
                    className="justify-center h-full flex grid grid-cols-1 md:grid-cols-2 gap-16">

                    <Fade bottom cascade>
                        <div className="relative w-full h-full md:col-span-1">
                            <h1 className={`title-large text-zinc-${textColorCodes.secondary} md:text-right`}>Coole tekeningen</h1>
                            <p  className={`md:text-right text-zinc-${textColorCodes.secondary + 100}`}>
                                Tekening van mijn hoofd met een geweer of een extra paar
                                hersenen want die heb ik wel nodig.
                                Ik teken veel mensen want dat vind ik leuk.
                            </p>
                            <div
                                className={`underline-animation hidden md:block float-right mt-8 w-auto justify-end px-4 py-2 font-bold rounded hover:cursor-pointer text-zinc-${textColorCodes.secondary + 100}\``}>
                                <Link href="/galerij">
                                    <span>Bekijk alles</span>
                                </Link>
                            </div>
                        </div>
                    </Fade>
                    <div className="md:col-span-1 shadow-image">
                        <NextImage src={'/groen.png'} height={700} width={500}/>
                    </div>
                </div>
                <div
                    className={`md:hidden block underline-animation mt-8 float-right w-auto justify-end px-4 py-2 font-bold text-zinc-${textColorCodes.secondary + 100}`}>
                    <Link href="/galerij">
                        <span>Bekijk alles</span>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export async function getStaticProps() {
    const products = await getProducts()
    return {props: {products}}
}

export default HomePage;
