import { useContext, useRef } from 'react'
import { AppContext } from '../../context/AppContext'

const CartItem = ({ item }) => {
    const renderCount = useRef(0)
    renderCount.current++;
  const { dispatch } = useContext(AppContext)

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item.productId,
    })
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
