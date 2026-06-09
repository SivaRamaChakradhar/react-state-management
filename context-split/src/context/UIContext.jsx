import { createContext, useReducer } from 'react'

export const UIContext = createContext()

const initialState = {
  theme: 'light',
  notification: null,
}

const uiReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme:
          state.theme === 'light'
            ? 'dark'
            : 'light',
      }

    default:
      return state
  }
}

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    uiReducer,
    initialState
  )

  return (
    <UIContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </UIContext.Provider>
  )
}