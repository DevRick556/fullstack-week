import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ConsumptionMethodOptionProps {
    slug: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    buttonHref: string;
    option: ConsumptionMethod
}
const ConsumptionMrthodOption = ({imageAlt,imageUrl,buttonText, buttonHref, option,slug}: ConsumptionMethodOptionProps) => {
    return ( 
        <Card>
            <CardContent className="flex flex-col items-center gap-8 py-8">
                <div className="relative h-[80px] w-[80px]">
                    <Image 
                     src={imageUrl}
                     fill 
                     alt={imageAlt}
                     className="object-contain">
                     </Image>
                </div>
                
                <Button variant="secondary" className="rounded-full" asChild>
                    <Link href={`/${slug}/menu?ConsumptionMethod=${option}`}>
                        { buttonText }
                    </Link>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default ConsumptionMrthodOption;