import { useContext, useRef } from 'react'

import UserInfo from '../UserInfo/UserInfo'
import CartItemCount from '../CartItemCount/CartItemCount'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'


const Header = () => {
  const renderCount = useRef(0)
  renderCount.current++

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__brand">
          <h1 className="header__logo">Store</h1>
          <p className="header__tagline">
            Browse products and manage your cart in one place.
          </p>
          <small data-testid="render-count" className="header__render-count">
            Header renders: {renderCount.current}
          </small>
        </div>

        <div className="header__actions">
          <UserInfo />
          <CartItemCount />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}

export default Header
