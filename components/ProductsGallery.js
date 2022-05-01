import Gallery from 'react-photo-gallery'
import { API_URL } from '../utils/urls';
import CategoryButtons from "./CategoryButtons"

const ProductsGallery = ({ products }) => {

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
        <Gallery photos={newProducts} direction={"column"} onClick={goToSlug} margin={10} />
    </div>
    </>
  )
}

export default ProductsGallery
