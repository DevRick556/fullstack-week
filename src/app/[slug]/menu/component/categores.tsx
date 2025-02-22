"use client"
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MenuCategory, Prisma, PrismaClient, Restaurant } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Products from "./products";

// informações dos resturantes
interface RestaurantCategoriesProps{
    restaurant: Prisma.RestaurantGetPayload<{
        include:{
            menuCategory: {
                include:{products: true} //informando para o prisma oq já tem nas tabela
            }
        }
    }>;
}

type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{
    include : {products : true}
}>


const RestaurantCategory = ({restaurant}: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectCategory] = useState<MenuCategoriesWithProducts>(restaurant.menuCategory[0]) //seleção de categoria
    const handleCategoryClick = (category: MenuCategoriesWithProducts) =>{
        setSelectCategory(category)
    }
    //mudar a cor do butão
    const getCategoryButtonVariant = (category: MenuCategoriesWithProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
    }


    return ( 
        <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl  bg-white "> 
            <div className="p-5">
                <div className="flex items-center gap-3 ">
                <Image src={restaurant.avatarImageUrl} alt={restaurant.name} height={45} width={45}/>
                <div>
                    <h2 className="font-semibold text-lg">{restaurant.name}</h2>
                    <p className="text-xs opacity-55">{restaurant.description}</p>
                </div>

                <div className=" mt-3 flex items-center gap-1 text-xs text-green-500">
                    <ClockIcon size={12}/>
                    <p>Aberto !</p>
                </div>
            </div>

            {/* categoriad do rest */}
        </div>
        <ScrollArea className="w-full">
            <div className="flex w-max space-x-4 p-4">
                {restaurant.menuCategory.map(category => (
                    <Button onClick={() => handleCategoryClick(category)} key={category.id} variant={getCategoryButtonVariant(category)}>
                        {category.name}
                    </Button>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
            <h3 className="px-5 font-semibold pt-2">{selectedCategory.name}</h3>
        <Products products={selectedCategory.products}/>
        </div>
    );
}
 
export default RestaurantCategory;