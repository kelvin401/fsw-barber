"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Barbershop } from "@prisma/client";
import { Button } from "@/app/_components/ui/button";
import {
  ChevronLeftIcon,
  MapPinIcon,
  MenuIcon,
  StarIcon,
  VideoIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import SideMenu from "@/app/_components/side-menu";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Button
          size="icon"
          variant="outline"
          className="absolute left-4 top-4 z-50"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="absolute right-4 top-4 z-50"
        >
          <MenuIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4 z-50"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>

      <div className="space-y-3 border-b border-solid border-secondary px-5 pb-6 pt-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1">
          <MapPinIcon className="mr-2 text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="mr-2 text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>

        <div className="flex items-center gap-1">
          <VideoIcon className="mr-2 text-primary" size={18} />
          <a href="https://youtu.be/LTSBTaxEkNg?t=3827">Ver video</a>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
