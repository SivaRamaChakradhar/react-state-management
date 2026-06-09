import { useContext, useRef } from 'react'
import { HiShoppingBag } from 'react-icons/hi2'

import { AppContext } from '../../context/AppContext'

const CartItemCount = () => {
  const renderCount = useRef(0)
  renderCount.current++;
  const { state } = useContext(AppContext)

  const totalItems = state.cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="pill pill--semibold">
      <small data-testid="render-count">
        {renderCount.current}
      </small>
      <HiShoppingBag className="icon" />
      <span>{totalItems}</span>
      {totalItems === 1 ? 'item' : 'items'}
    </div>
  )
}

export default CartItemCount
