export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#010101] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#866947]">WL Arquitetura</h1>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" data-scroll data-scroll-id="quem-somos" className="hover:text-[#866947] transition">
            Quem somos
          </a>
          <a href="#" data-scroll data-scroll-id="missao-visao-valores" className="hover:text-[#866947] transition">
            Missão, Visão e Valores
          </a>
          <a href="#" data-scroll data-scroll-id="projetos" className="hover:text-[#866947] transition">
            Projetos
          </a>
        </nav>
      </div>
    </header>
  );
}
