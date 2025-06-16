"use client"; //usar toda vez quando usar component

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";
import { Prisma, Product, Restaurant } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext, CartProduct } from "../../contexts/cart";

import CartSheet from "../../component/cart-sheet";

interface ProductsDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
  // restaurant: Restaurant
}

const ProductDetails = ({ product }: ProductsDetailsProps) => {
  // usar para acessar meu contexto
  const { toggleCart, addProduct } = useContext(CartContext);
  // armazenar a quantidade de click no state
  const [quantaty, setQuantity] = useState<number>(1);
  const handlerDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }

      return prev - 1;
    });
  };
  const handlerIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // mandar pro onclick
  const handleAddToCard = () => {
    const cartProduct: CartProduct = {
      ...product,
      quantaty,
    };
    addProduct(cartProduct);
    toggleCart();
  };

  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col overflow-hidden rounded-t-3xl p-5">
        <div className="flex-auto overflow-hidden">
          {/* restaurante foto e nome */}
          <div className="flex items-center gap-1.5 ">
            <Image
              src={product.restaurant.avatarImageUrl}
              alt={product.restaurant.name}
              width={25}
              height={25}
              className="rounded-full"
            />
            {/* texto */}
            <p className="text-xs text-muted-foreground">
              {product.restaurant.name}
            </p>
          </div>
          {/* texto abaixo da logo */}
          <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

          {/*  */}

          {/* PREÇO, nome e quantidade */}
          <div className="flex items-center justify-between mt-3">
            {/* nome */}
            <h3 className="text-xl font-semibold ">
              {formatCurrency(product.price)}
            </h3>
            {/* quantidade */}
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-xl"
                onClick={handlerDecreaseQuantity}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="w-4">{quantaty}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={handlerIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            {/* sobre */}
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* ingredientes */}
            <div className="mt-6 space-y-3">
              <div className="  flex items-center gap-2">
                <ChefHatIcon size={15} />
                <h4 className="font-semibold">Igredientes</h4>
              </div>
              <ul className="text-muted-fo list-disc px-5 text-sm text-muted-foreground">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>

        {/* butão de add */}
        <Button className="mt-6 w-full rounded-full" onClick={handleAddToCard}>
          Adicionar à sacola
        </Button>
        <CartSheet />
      </div>
    </>
  );
};

export default ProductDetails;
