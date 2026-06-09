import { useContext, useRef } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import CartSummary from '../CartSummary/CartSummary'

const CartSideBar = () => {
    const renderCount = useRef(0)
    renderCount.current++;
  const { state, dispatch } = useContext(CartContext)

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

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
          <button type="button" onClick={toggleCart} className="cart-sidebar__toggle">
            {state.cart.isOpen ? 'Hide' : 'Show'}
          </button>
        </div>

        {!state.cart.isOpen ? (
          <div className="cart-sidebar__empty">
            Cart is hidden. Click show to view items.
          </div>
        ) : state.cart.items.length === 0 ? (
          <div className="cart-sidebar__empty">
            Your cart is empty. Add products from the shop.
          </div>
        ) : (
          <div className="cart-sidebar__items">
            {state.cart.items.map(item => (
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
