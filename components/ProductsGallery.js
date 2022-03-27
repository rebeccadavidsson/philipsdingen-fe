import Gallery from 'react-photo-gallery'
import { API_URL } from '../utils/urls';

const ProductsGallery = ({ products }) => {

  const newProducts = [];
  
  products.map((prod) => {
    const newProd = prod;
    newProd.src = API_URL + prod.image.url;
    newProd.width = prod.image.width;
    newProd.height = prod.image.height;
    newProducts.push(newProd)
  })

  const goToSlug = (props) => {
    window.location.href = `/products/${props.target.getAttribute('slug')}`
  }

  return (
    <div className="container mt-8">
        <Gallery photos={newProducts} direction={"column"} onClick={goToSlug} />
    </div>
  )
}

export default ProductsGallery
