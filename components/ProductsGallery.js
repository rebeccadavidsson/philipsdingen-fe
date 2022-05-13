import Gallery from 'react-photo-gallery-next'
import CategoryButtons from "./CategoryButtons"
import useWindowDimensions from "../utils/useWindowDimensions";
import { getBase64ImageUrl } from "../utils/getBase64ImageUrl";
import React from "react";

const ProductsGallery = ({ products }) => {

  const { width } = useWindowDimensions()

  const getBlurDataUrl = async () => {
    return await getBase64ImageUrl(products[0].id);
  }

  const newProducts = [];
  products.map((prod) => {
    const newProd = prod;
    newProd.src = prod.image.url;
    newProd.width = prod.image.width;
    newProd.height = prod.image.height;
    newProd.blurDataUrl = getBlurDataUrl(prod.id);
    newProducts.push(newProd)
  })

  return (
    <>
    <CategoryButtons  />
    <div className="container mt-8" id="products-gallery">
        <Gallery photos={newProducts}  direction={"column"} margin={2} columns={width > 768 ? 3 : 2} />
    </div>
    </>
  )
}

export default ProductsGallery
