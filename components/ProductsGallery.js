import CategoryButtons from "./CategoryButtons"
import useWindowDimensions from "../utils/useWindowDimensions";
import { useRouter } from 'next/router'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from "react";
import { NextImage } from '../components/Image'
import { Fade } from "react-reveal";
import Gallery from "react-photo-gallery-next";

const ProductsGallery = ({products}) => {
    const router = useRouter()

    const {width} = useWindowDimensions();
    const newProducts = [];
    products.map((prod) => {
        const newProd = prod;
        newProd.src = prod.image.url;
        newProd.width = prod.image.width;
        newProd.height = prod.image.height;
        newProducts.push(newProd)
    });

    const goToSlug = (props) => {
        router.push(`/products/${props.target.getAttribute('slug')}`);
    }

    return (
        <>
            <CategoryButtons/>
            <div className="container mt-8 " id="products-gallery">

                <Gallery photos={newProducts} direction={"column"} onClick={goToSlug} margin={6}
                         columns={width > 768 ? 3 : 2}/>
            </div>
        </>
    )
}

export default ProductsGallery
