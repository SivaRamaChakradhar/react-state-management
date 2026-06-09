import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const initialState = {
  name: 'Siva',
  isLoggedIn: true,
}

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userReducer,
    initialState
  )

  return (
    <UserContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </UserContext.Provider>
  )
}