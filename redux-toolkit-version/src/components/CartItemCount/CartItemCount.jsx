import { useRef } from 'react'
import { HiShoppingBag } from 'react-icons/hi2'
import { useSelector } from 'react-redux'

const CartItemCount = () => {
  const renderCount = useRef(0)
  renderCount.current++;

  const items = useSelector((state) => state.cart.items)

  const totalItems = items.reduce(
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
