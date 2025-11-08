import { create } from "zustand";

export const cartstore = create((set) => ({
  cart: [],

  
  addtocart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removecartitem: (productId) =>
    set((state) => {
      const item = state.cart.find((i) => i.id === productId);
      if (!item) return state;

      if (item.quantity > 1) {
        return {
          cart: state.cart.map((i) =>
            i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      } else {
        return { cart: state.cart.filter((i) => i.id !== productId) };
      }
    }),

  
 

  
  clearcart: () => set({ cart: [] }),
}));
