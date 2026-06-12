import React from "react";
import Header from './components/Header/Header'
import ProductListPage from './components/ProductListPage/ProductListPage'
import CartSideBar from './components/CartSideBar/CartSideBar'

import { useSelector } from "react-redux";

const AppContent = () => {
  const theme = useSelector(
    state => state.ui.theme
  );
  const isDark = theme === 'dark';

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
