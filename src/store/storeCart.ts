import { create } from 'zustand';
import { type CartItems } from '../types/index';
import { Product } from '@prisma/client';

interface StoreCart {
  cart: CartItems[];
  addToCart: (value: Product) => void;
  incrementItems: (id: number) => void;
  decrementItems: (id: number) => void;
  deleteItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<StoreCart>((set, get) => ({
  cart: [],
  addToCart: (value) => {
    const { categoryId, ...data } = value; 
    let cartOrder: CartItems[] = [];

    if (get().cart.find((item) => item.id === value.id)) {
      cartOrder = get().cart.map((item) =>
        item.id === value.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subTotal: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      // Add new item to cart
      cartOrder = [
         ...get().cart,
        {
          ...data,
          quantity: 1,
          subTotal: 1 * value.price,
        },
      ];
    }

    // Update the cart state
    set(() => ({
      cart: cartOrder,
    }));
  },
  incrementItems: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subTotal: item.price * (item.quantity + 1),
            }
          : item
      ),
    }));
  },
  decrementItems: (id) => {
    // Prevent negative quantities
    const cartOrder = get().cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              subTotal: item.price * (item.quantity - 1),
            }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

    set(() => ({
      cart: cartOrder,
    }));
  },
  deleteItem: (id) => {
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
  },
  clearCart: () => {
   // console.log('clearForm called');
    set(() => ({ cart: []}));
  },
}));

export default useCartStore;
