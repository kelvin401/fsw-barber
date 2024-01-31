import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";

export default function Home() {
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
