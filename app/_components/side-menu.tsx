'use client';
import { Avatar, AvatarImage } from './ui/avatar';
import {
  LogOutIcon,
  UserIcon,
  LogInIcon,
  HomeIcon,
  CalendarIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import { SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const SideMenu = () => {
  const { data } = useSession();

  // o parametro google evita a tela de signIn with google e já
  // avança para a tela de consentimento.
  const handleLogInClick = () => signIn('google');

  const handleLogOutClick = () => signOut();

  return (
    <>
      <SheetHeader className="border-b border-solid border-secondary p-5 text-left">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex items-center justify-between px-5 py-6">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ''} />
            </Avatar>

            <h2 className="font-bold">{data.user.name}</h2>
          </div>

          <Button variant="secondary" size="icon" onClick={handleLogOutClick}>
            <LogOutIcon />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 px-5 py-6">
          <div className="flex items-center gap-2">
            <UserIcon size={32} />
            <h2 className="font-bold">Olá, faça seu login!</h2>
          </div>
          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={handleLogInClick}
          >
            <LogInIcon className="mr-2" size={18} />
            Fazer Login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={handleLogInClick}
          asChild
        >
          <Link href="/">
            <HomeIcon className="mr-2" size={18} />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleLogInClick}
            asChild
          >
            <Link href="/bookings">
              <CalendarIcon className="mr-2" size={18} />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
