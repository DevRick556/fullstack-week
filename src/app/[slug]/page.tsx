import { db } from "@/lib/prisma";
import { getRestaurantBySlug } from "../data/get-restaurant-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMrthodOption from "./components/cosumption-method-options";

interface RestaurantePageProps {
  params: { slug: string };
}

const RestaurantePage = async ({ params }: RestaurantePageProps) => {
  const {slug} = params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  } //se eu n estanciar nenhum restaurante, ele vai retornar um 404

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* logo e titulo */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* bem -vindo */}
      <div>
        <div className="pt-24 text-center space-y-5">
          <h3 className="text-2xl font-sembold">seja bem-vindo</h3>
          <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. Estamosoferecer
            praticidade e sabor em cada detalhe
          </p>
        </div>
      </div>
      {/* card */}
      <div className="pt-14 grid grid-cols-2 gap-4">
        {/* renderizar */}
        <ConsumptionMrthodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Para comer aqui"
          imageUrl="/dine_in.png"
          imageAlt="comer aqui" buttonHref={""}/>

         <ConsumptionMrthodOption
          option="TAKEAWAY"
          slug={slug}
          buttonText="Para levar"
          imageUrl="/takeaway.png"
          imageAlt="levar" buttonHref={""}/>
      </div>
    </div>
  );
};

export default RestaurantePage;
