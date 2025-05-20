export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 pt-24 bg-[#010101]">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#866947]">Transformamos Espaços em Experiências</h1>
        <p className="text-lg text-gray-300">
          Projetos residenciais, reformas e interiores sob medida com excelência e estilo.
        </p>
        <a
          href="#projetos"
          data-scroll
          data-scroll-id="projetos"
          className="inline-block px-6 py-3 bg-[#866947] text-white rounded hover:bg-[#A9A9A9] transition"
        >
          Ver projetos
        </a>
      </div>
    </section>
  );
}
