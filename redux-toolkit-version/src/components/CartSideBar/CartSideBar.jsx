import { useRef } from 'react'
import CartItem from '../CartItem/CartItem'
import CartSummary from '../CartSummary/CartSummary'

import { useSelector, useDispatch } from 'react-redux'

import { toggleCart } from '../../store/cartSlice'

const CartSideBar = () => {
  const isOpen = useSelector((state)=>state.cart.isOpen)
  const items = useSelector((state)=>state.cart.items)

  const dispatch = useDispatch()
  const renderCount = useRef(0)
  renderCount.current++;

  return (
    <aside className="cart-sidebar">
      <div className="cart-sidebar__panel">
        <small data-testid="render-count">
        {renderCount.current}
        </small>
        <div className="cart-sidebar__header">
          <div>
            <p className="cart-sidebar__label">Cart</p>
            <h2 className="cart-sidebar__title">Your bag</h2>
          </div>
          <button type="button" onClick={()=>dispatch(toggleCart())} className="cart-sidebar__toggle">
            {isOpen ? 'Hide' : 'Show'}
          </button>
        </div>

        {!isOpen ? (
          <div className="cart-sidebar__empty">
            Cart is hidden. Click show to view items.
          </div>
        ) : items.length === 0 ? (
          <div className="cart-sidebar__empty">
            Your cart is empty. Add products from the shop.
          </div>
        ) : (
          <div className="cart-sidebar__items">
            {items.map(item => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
        )}

        <div className="cart-sidebar__summary">
          <CartSummary />
        </div>
      </div>
    </aside>
  )
}

export default CartSideBar
