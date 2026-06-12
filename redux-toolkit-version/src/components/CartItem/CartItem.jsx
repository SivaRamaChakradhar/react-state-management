import { useRef } from 'react'

import { useDispatch } from 'react-redux'

import { removeFromCart } from '../../store/cartSlice'

const CartItem = ({ item }) => {
  const renderCount = useRef(0)
  renderCount.current++; 

  const dispatch = useDispatch()

  return (
    <div className="cart-item">
        <small data-testid = "render-count">
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
      <button type="button" onClick={()=>{dispatch(removeFromCart(item.productId))}} className="cart-item__remove">
        Remove
      </button>
    </div>
  )
}

export default CartItem
