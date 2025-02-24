"use client"

import { CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import { Children, createContext, ReactNode, useState } from "react";

// passar o valor para a o produtp
interface CartProduct extends Product {
  quanity: number;
}

export interface IcardContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
}

export const CartContext = createContext<IcardContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

// terão acesso ao contexto,passar para todos q precisam usar esse contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProduct] = useState<CartProduct[]>([]);
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <CartContext.Provider
      value={{ 
         isOpen,
         products,
         toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
