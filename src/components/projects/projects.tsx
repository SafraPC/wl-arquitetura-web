export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pb-20" id="projetos">
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#A9A9A9]">Projetos</h2>
        <p className="text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-[#866947] rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
            <div className="h-40 bg-[#A9A9A9] rounded mb-2" />
            <h3 className="text-lg font-semibold text-white">Projeto {i}</h3>
            <p className="text-sm text-white">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
