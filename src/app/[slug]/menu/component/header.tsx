"use client"

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// puxando dados do Prisma
interface RestauranteHeaderProps{
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}

const RestaurantHeader = ({restaurant}: RestauranteHeaderProps) => {
    // use client
    const router = useRouter()
    const handleBackClick= () => router.back()
    return ( 
        <div className="relative h-[250px] w-full">   
                <Button variant="secondary" size="icon" className="absolute left-4 z-50 rounded-full" onClick={handleBackClick}>
                    <ChevronLeftIcon />
                </Button>
                <Image src={restaurant.coverImageUrl} alt={restaurant.coverImageUrl} fill className="object-cover"/>
                {/* butão comprar */}
                 <div className="relative h-[250px] w-full">
                    <Button variant="secondary" size="icon" className="absolute right-4 z-50 rounded-full">
                        {/* <ChevronLeftIcon /> */}
                        <ScrollTextIcon/>
                    </Button>
                    
                 </div>
            </div>
     );
}
 
export default RestaurantHeader;