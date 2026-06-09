import React from "react";
import Header from './components/Header/Header'
import ProductListPage from './components/ProductListPage/ProductListPage'
import CartSideBar from './components/CartSideBar/CartSideBar'

import useAppStore from "./store/useAppStore";

const AppContent = () => {
  const ui = useAppStore((state) => state.ui);
  const isDark = ui.theme === 'dark';

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
    <AppContent />
);

export default App
