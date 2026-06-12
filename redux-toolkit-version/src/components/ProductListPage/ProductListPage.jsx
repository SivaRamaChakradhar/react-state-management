import {useRef} from 'react'

import products from '../../data/product'
import ProductCard from '../ProductCard/ProductCard'

const ProductListPage = () => {
    const renderCount= useRef(0)
    renderCount.current++;
  return (
    <section className="product-list">
        <small data-testid="render-count">{renderCount.current}</small>
      <div className="product-list__header">
        <div>
          <h1 className="product-list__title">Shop products</h1>
          <p className="product-list__subtitle">
            Browse the catalog and add items to your cart in one click.
          </p>
        </div>
        <p className="product-list__count">{products.length} items available</p>
      </div>

      <div className="product-list__grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductListPage
