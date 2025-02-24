"use client"

import { CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import { Children, createContext, ReactNode, useState } from "react";

// passar o valor para a o produtp
export interface CartProduct extends Pick<Product, "id" | "name" | "imageUrl"> {
  quantaty: number;
}

export interface IcardContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void; //esse void é q n vai retornar nd
}

export const CartContext = createContext<IcardContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {}
});

// terão acesso ao contexto,passar para todos q precisam usar esse contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProduct] = useState<CartProduct[]>([]);
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsopen((prev) => !prev);
  };
//   função para add no carrinho
  const addProduct = (product: CartProduct) => {
    setProduct((prev =>([...prev, product])))
  }
  return (
    <CartContext.Provider
      value={{ 
         isOpen,
         products,
         toggleCart,
         addProduct,}}
    >
      {children}
    </CartContext.Provider>
  );
};
