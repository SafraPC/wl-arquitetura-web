"use client";
import capa from "@/assets/capa_1.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 pt-24 bg-white">
      <div className="absolute inset-0 z-0">
        <Image src={capa} alt="Capa" className="w-full h-full object-cover brightness-50" />
      </div>
      <motion.div
        className="max-w-4xl z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="space-y-5 ">
          <h1 className="text-7xl font-light text-white">Transformamos</h1>
          <h1 className="text-7xl font-light text-white">Espaços em</h1>
          <h1 className="text-7xl font-light text-white">Experiências</h1>
          <p className="text-2xl font-light text-white mb-5">
            Projetos residenciais, reformas e interiores sob medida com excelência.
          </p>
          <a
            target="_blank"
            href="https://wa.me/19992562736"
            className="inline-block px-6 py-3 bg-darkYellow text-white rounded hover:bg-darkerYellow transition"
          >
            Agendar orçamento
          </a>
        </div>
      </motion.div>
    </section>
  );
}
