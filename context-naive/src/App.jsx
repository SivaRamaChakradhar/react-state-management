import React, { useContext } from "react";
import Header from './components/Header/Header'
import ProductListPage from './components/ProductListPage/ProductListPage'
import CartSideBar from './components/CartSideBar/CartSideBar'
import { AppContext, AppProvider } from "./context/AppContext";

const AppContent = () => {
  const { state } = useContext(AppContext)
  const isDark = state.ui.theme === 'dark'

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
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App
