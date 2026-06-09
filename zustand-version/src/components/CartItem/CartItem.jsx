import { useRef } from 'react'

import useAppStore from '../../store/useAppStore';

const CartItem = ({ item }) => {
  const removeFromCart = useAppStore((state)=>state.removeFromCart)
  const renderCount = useRef(0)
  renderCount.current++; 

  const handleRemove = () => {
    removeFromCart(item.productId)
  }

  return (
    <div className="cart-item">
        <small data-testid>
            {renderCount.current}
        </small>
      <div className="cart-item__row">
        <div>
          <p className="cart-item__name">{item.name}</p>
          <p className="cart-item__qty">Qty: {item.quantity}</p>
        </div>
        <span className="cart-item__price">
          ₹{(item.price * item.quantity).toLocaleString()}
        </span>
      </div>
      <button type="button" onClick={handleRemove} className="cart-item__remove">
        Remove
      </button>
    </div>
  )
}

export default CartItem
