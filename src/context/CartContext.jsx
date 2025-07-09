import { createContext, useContext, useReducer, useEffect } from "react"

const CartContext = createContext()

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = cartState.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...cartState,
          items: cartState.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return {
        ...cartState,
        items: [...cartState.items, { ...action.payload, quantity: 1 }],
      }

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        items: cartState.items.filter((item) => item.id !== action.payload),
      }

    case "UPDATE_QUANTITY":
      return {
        ...cartState,
        items: cartState.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }

    default:
      return cartState
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] }, (initialState) => {
    try {
      const storedCart = localStorage.getItem("cart")
      return storedCart ? JSON.parse(storedCart) : initialState
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
      return initialState
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartState))
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error)
    }
  }, [cartState])

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } })
    }
  }

  const getTotalItems = () => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartState.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}