import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLastIcon, ChevronLeft, ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantHeader from "./component/header";

// pegar o slug da url e passar para a pagina
interface RestauranMenuPageProps {
    params: { slug: string };
    searchParams: { ConsumptionMethod: string };

}

// validar se o metodo de consumo é valido
const isConsuptionMethodValid = (consumptionMethod: string) => {
    return [ "DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toLocaleUpperCase());
}

// pagina de menu do restaurante e url
const RestauranMenuPage = async({params, searchParams}: RestauranMenuPageProps) => {
    const {slug} = await params;
    const {ConsumptionMethod} = await searchParams;
    if (!isConsuptionMethodValid(ConsumptionMethod)) {
        return notFound();
    }
    const restaurant = await db.restaurant.findUnique({where: {slug}})
    if (!restaurant) {
        return notFound();
    }
    return (
        //div da imagem
        <div>     
            <RestaurantHeader restaurant={restaurant}/>
            
        </div> 


        // <h1>
        //     {slug} {ConsumptionMethod}
        // </h1>
     );
}
 
export default RestauranMenuPage;