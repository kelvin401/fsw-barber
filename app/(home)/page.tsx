import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  // chamar barbearias
  const barbershops = await db.barbershop.findMany({});

  return (
    <div className="w-full">
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Kelvin!</h2>
        <p className="capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6">
          <h2 className="pb-2 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <BookingItem />
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
      </div>

      <div className="mt-10 flex flex-col items-center justify-center text-zinc-400">
        <p> Paramos em 1h18m11s</p>
        <a href="https://youtu.be/aUkKMKJib0A?t=4691">
          <strong className="underline">Clique aqui</strong> para acessar a aula
        </a>
      </div>
    </div>
  );
}
