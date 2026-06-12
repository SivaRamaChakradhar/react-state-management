import { useRef } from 'react'
import { HiPlus } from 'react-icons/hi2'

import { useDispatch }from 'react-redux'

import { addToCart } from '../../store/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const renderCount = useRef(0)
  renderCount.current++

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <article className="product-card">
      <small data-testid="render-count">
        render-count: {renderCount.current}
      </small>
      <div className="product-card__top">
        <h2 className="product-card__name">{product.name}</h2>
        <span className="product-card__price">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
      <p className="product-card__description">
        High-quality {product.name.toLowerCase()} with fast delivery and great support.
      </p>
      <button type="button" onClick={handleAddToCart} className="product-card__btn">
        <HiPlus className="icon" />
        Add to cart
      </button>
    </article>
  )
}

export default ProductCard
