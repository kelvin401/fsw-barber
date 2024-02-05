import { format, isFuture } from 'date-fns';
import Header from '../_components/header';
import { ptBR } from 'date-fns/locale/pt-BR';
import Search from './_components/search';
import BookingItem from '../_components/booking-item';
import { db } from '../_lib/prisma';
import BarbershopItem from './_components/barbershop-item';
import { VideoIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  const [barbershops, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({}),
    session?.user
      ? db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              gte: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
        })
      : Promise.resolve([]),
  ]);

  return (
    <div className="w-full">
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">
          {session?.user
            ? `Olá, ${session?.user?.name?.split(' ')[0]}!`
            : 'Olá! Vamos agendar um corte hoje?'}
        </h2>
        <p className="capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
        <div className="mt-4 flex items-center gap-1 text-xs">
          <VideoIcon className="mr-2 text-primary" size={18} />
          <a href="https://youtu.be/wyFPX6WBaYA?t=1588" target="_blank">
            <p className="text-sm">Voltar para aula</p>
          </a>
        </div>
        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6">
          {confirmedBookings.length > 0 && (
            <>
              <h2 className="mb-3 mt-4 text-sm font-bold uppercase text-gray-400">
                Agendamentos
              </h2>

              <div className="mt-6 flex gap-3 overflow-x-auto pr-5 [&::-webkit-scrollbar]:hidden">
                {confirmedBookings.map((booking) => (
                  <BookingItem key={booking.id} booking={booking} />
                ))}
              </div>
            </>
          )}
        </div>

        <div>
          <h2 className="py-5 pb-2 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>

          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="py-5 pb-2 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>

          <div className="mb-[4.5rem] flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
