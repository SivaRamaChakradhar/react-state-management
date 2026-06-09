import { create } from 'zustand'

const useAppStore = create(set => ({
    cart: {
        items: [],
        isOpen: true,
    },
    user: {
        name: 'Siva',
        isLoggedIn: true,
    },
    ui: {
        theme: 'light',
        notification: null,
    },

    toggleTheme: () => set(state => ({
        ui: {
            ...state.ui,
            theme: state.ui.theme === 'light' ? 'dark' : 'light',
        },
    })),

    toggleCart: () => set((state) => ({
      cart: {
        ...state.cart,
        isOpen: !state.cart.isOpen,
      },
    })),

    addToCart: (product) => set((state) => {
        const existingItem = state.cart.items.find(
            item => item.productId === product.id
        )

        let updatedItems

        if (existingItem) {
        updatedItems = state.cart.items.map(item =>
            item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                }
            : item
        )
        } else {
        updatedItems = [
            ...state.cart.items,
            {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            },
        ]
        }

        return {
        cart: {
            ...state.cart,
            items: updatedItems,
        },
        }
    }),

    removeFromCart: (productId) => set((state) => ({
        cart: {
        ...state.cart,
        items: state.cart.items.filter(
            item => item.productId !== productId
        ),
        },
    })),  
}))

export default useAppStore