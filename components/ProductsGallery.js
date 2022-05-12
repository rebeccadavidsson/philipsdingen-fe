import Gallery from 'react-photo-gallery'
import CategoryButtons from "./CategoryButtons"
import useWindowDimensions from "../utils/useWindowDimensions";

const ProductsGallery = ({ products }) => {

  const { width } = useWindowDimensions()

  const newProducts = [];
  products.map((prod) => {
    const newProd = prod;
    newProd.src = prod.image.url;
    newProd.width = prod.image.width;
    newProd.height = prod.image.height;
    newProducts.push(newProd)
  })

  const goToSlug = (props) => {
    window.location.href = `/products/${props.target.getAttribute('slug')}`
  }

  return (
    <>
    <CategoryButtons  />
    <div className="container mt-8" id="products-gallery">
        <Gallery photos={newProducts} direction={"column"} onClick={goToSlug} margin={2} columns={width > 768 ? 3 : 2} />
    </div>
    </>
  )
}

export default ProductsGallery
