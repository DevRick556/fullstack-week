import Image from "next/image";
import { CartProduct } from "../menu/contexts/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Icon } from "lucide-react";

interface CartItemProps{
    product: CartProduct
}

const CartProductItem = ({product}: CartItemProps) => {
    return(
        <div className="flex items-center justify-between">
            {/* esquerda */}
            <div className="flex items-center gap-3">
                <div className="ralative h-20 w-20">
                    <Image src={product.imageUrl} alt={product.name} height={60} width={60}/>
                </div>
            </div>
            <div className="space-y-1">
                <p className="text-xs">{product.name}</p>
                <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                {/* quantidade */}
                <div className="flex items-center gap-1">
                    <Button className="h-7 w-7 " variant="outline">
                        <ChevronLeftIcon />
                    </Button>
                    <Button className="h-7 w-7" variant="destructive">
                        <ChevronRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartProductItem;
