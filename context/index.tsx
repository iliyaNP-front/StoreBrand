"use client";

import { Product, products } from "@/data/products";
import { createContext, useContext, useReducer, useState } from "react";

type CartProduct = Product & { quantity: number };

type State = {
  shopCart: CartProduct[];
};

type Action =
  | { type: "ADD"; id: string; quantity: number }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "DELETE_PRODUCT"; id: string }
  | { type: "CLEAR_CART" };

type MyContextValue = {
  shopCart: CartProduct[];
  AddToShopCart: (id: string, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  DeleteProduct: (id: string) => void;
  DeleteAllProduct: () => void;
};

const MyContext = createContext<MyContextValue | undefined>(undefined);

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const selectedProduct = products.find((p) => p.id === action.id);
      if (!selectedProduct) return state;

      const existing = state.shopCart.find((p) => p.id === action.id);

      if (existing) {
        return {
          shopCart: state.shopCart.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + (action.quantity || 1) }
              : item,
          ),
        };
      }

      return {
        shopCart: [
          ...state.shopCart,
          { ...selectedProduct, quantity: action.quantity || 1 },
        ],
      };
    }

    case "UPDATE_QUANTITY":
      return {
        shopCart: state.shopCart.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item,
        ),
      };

    case "DELETE_PRODUCT":
      return {
        shopCart: state.shopCart.filter((p) => p.id !== action.id),
      };

    case "CLEAR_CART":
      return { shopCart: [] };

    default:
      return state;
  }
}

export default function MyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, { shopCart: [] });

  function AddToShopCart(id: string, quantity: number) {
    dispatch({ type: "ADD", id, quantity });
  }

  function updateQuantity(id: string, quantity: number) {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  }

  function DeleteProduct(id: string) {
    dispatch({ type: "DELETE_PRODUCT", id });
  }

  function DeleteAllProduct() {
    dispatch({ type: "CLEAR_CART" });
  }
  return (
    <MyContext.Provider
      value={{
        shopCart: state.shopCart,
        AddToShopCart,
        updateQuantity,
        DeleteProduct,
        DeleteAllProduct,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used inside MyProvider");
  }

  return context;
}
