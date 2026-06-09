import { useRef } from 'react'

import useAppStore from '../../store/useAppStore';

const CartSummary = () => {
  const items = useAppStore((state) => state.cart.items)
  const renderCount = useRef(0)
  renderCount.current++;

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  )

  return (
    <div className="cart-summary">
      <small data-testid ="render-count">{renderCount.current}</small>
      <h3 className="cart-summary__title">Order summary</h3>
      <div className="cart-summary__rows">
        <div className="cart-summary__row">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="cart-summary__row">
          <span>Subtotal</span>
          <span>₹{totalPrice.toLocaleString()}</span>
        </div>
      </div>
      <div className="cart-summary__total-row">
        <span>Total</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </div>
      <button
        type="button"
        disabled={totalItems === 0}
        className="cart-summary__checkout"
      >
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
