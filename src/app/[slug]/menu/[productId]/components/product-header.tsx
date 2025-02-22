"use client"

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
    product: Pick<Product,"name" |"imageUrl">
}



const Productheader = ({product}: ProductHeaderProps) => {
    const router = useRouter()
    const handleBackClick = () => router.back()
    return ( 
        <>
            {/* imagem do lanche */}
            <div className="relative h-[300px] w-full">
                    <Button variant="secondary" size="icon" className="absolute left-4 z-50 rounded-full top-4">
                        <ChevronLeftIcon />
                    </Button>

                <Image src={product.imageUrl} alt={product.name} fill className="object-contain" onClick={handleBackClick}/>
                    
                {/* butão comprar */}

                    <Button variant="secondary" size="icon" className="absolute top-4 right-4 z-50 rounded-full">
                        {/* <ChevronLeftIcon /> */}
                        <ScrollTextIcon/>
                    </Button>

            </div>
        </>
    );
}
 
export default Productheader;

function userRouter() {
    throw new Error("Function not implemented.");
}
