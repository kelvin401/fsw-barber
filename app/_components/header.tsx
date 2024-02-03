"use client";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <Card>
      <CardContent className="flex items-center justify-between px-5 py-8">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
