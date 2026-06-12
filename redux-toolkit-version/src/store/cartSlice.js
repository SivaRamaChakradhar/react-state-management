import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart(state, action) {
      const product = action.payload

      const existingItem = state.items.find(
        item => item.productId === product.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        })
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        item => item.productId !== action.payload
      )
    },

    toggleCart(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  toggleCart,
} = cartSlice.actions

export default cartSlice.reducer