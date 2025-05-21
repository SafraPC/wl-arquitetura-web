"use client";

import { motion } from "framer-motion";

export default function Mvv() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-lightGrey" id="missao-visao-valores">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-light mb-6 text-white text-center">Missão, Visão e Valores</h2>
        <p className="text-lg text-black font-light text-justify leading-relaxed">
          Nossa missão é <b>criar projetos inteligentes, funcionais e com personalidade</b>, respeitando a essência de
          cada cliente. Unimos design e tecnologia para desenvolver soluções arquitetônicas que encantam, facilitam o
          dia a dia e cabem no orçamento. Queremos tornar a arquitetura mais acessível, rápida e eficiente — sempre com
          atenção aos detalhes e compromisso com o que é mais importante: <b>você</b>.
        </p>
        <p className="text-lg text-black font-light text-justify leading-relaxed mt-4">
          Na WL Arquitetura, nossos valores são o que guiam cada etapa do processo:
          <br />
          <br />- <b>Inovação com propósito</b> – Aplicamos tecnologia e ferramentas digitais para entregar mais
          agilidade, precisão e criatividade nos projetos.
          <br />- <b>Personalização verdadeira</b> – Escutamos com atenção e projetamos com sensibilidade. Cada projeto
          é único, como cada cliente.
          <br />- <b>Funcionalidade no dia a dia</b> – Pensamos na praticidade dos ambientes, sem perder a estética.
          <br />- <b>Acessibilidade de verdade</b> – Criamos soluções que equilibram bom gosto e viabilidade financeira.
          <br />- <b>Comprometimento com o resultado</b> – Trabalhamos com dedicação, clareza e responsabilidade em cada
          entrega.
        </p>
      </motion.div>
    </section>
  );
}
