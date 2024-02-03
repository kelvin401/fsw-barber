"use client";
import Image from "next/image";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-8">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
