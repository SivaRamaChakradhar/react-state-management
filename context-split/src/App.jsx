import React, { useContext } from "react";
import Header from './components/Header/Header'
import ProductListPage from './components/ProductListPage/ProductListPage'
import CartSideBar from './components/CartSideBar/CartSideBar'
import { CartContext, CartProvider } from "./context/CartContext";
import { UserContext, UserProvider } from "./context/UserContext";
import { UIContext, UIProvider} from './context/UIContext';

const AppContent = () => {
  const { state } = useContext(UIContext)
  const isDark = state.theme === 'dark'

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <Header />
      <main className="main">
        <ProductListPage />
        <CartSideBar />
      </main>
    </div>
  )
}

const App = () => (
  <UserProvider>
    <UIProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </UIProvider>
  </UserProvider>
);

export default App
