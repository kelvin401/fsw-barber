import Header from "../_components/header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-10 flex flex-col items-center justify-center text-zinc-400">
        <p> Paramos em 1h18m11s</p>
        <a href="https://youtu.be/aUkKMKJib0A?t=4691">
          <strong className="underline">Clique aqui</strong> para acessar a aula
        </a>
      </div>
    </div>
  );
}
