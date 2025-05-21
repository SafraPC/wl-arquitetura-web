import logo from "@/assets/logo_3.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-darkBrown shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image alt="Logo" src={logo} className="h-10 w-auto object-contain" priority />
          <h1 className="text-1xl font-bold text-darkYellow">WL Arquitetura</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" data-scroll data-scroll-id="quem-somos" className="text-black hover:text-darkYellow transition">
            Quem somos
          </a>
          <a
            href="#"
            data-scroll
            data-scroll-id="missao-visao-valores"
            className="text-black hover:text-darkYellow transition"
          >
            Missão, Visão e Valores
          </a>
          <a href="#" data-scroll data-scroll-id="projetos" className="text-black hover:text-darkYellow transition">
            Projetos
          </a>
        </nav>
      </div>
    </header>
  );
}
