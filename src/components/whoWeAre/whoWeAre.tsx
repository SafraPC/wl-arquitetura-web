"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-background" id="quem-somos">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-light mb-6 text-darkYellow text-center">Quem somos</h2>
        <p className="text-lg text-black font-light text-justify leading-relaxed">
          Na <b>WL Arquitetura</b>, acreditamos que arquitetura vai muito além de construir espaços — é sobre contar
          histórias, materializar ideias e criar ambientes que inspiram, acolhem e facilitam o dia a dia. Nascemos da
          união entre dois amigos, <b>William (arquiteto)</b> e <b>Leandro (engenheiro de software)</b>, que decidiram
          unir seus conhecimentos para transformar a forma como projetos arquitetônicos são idealizados e executados. Ao
          integrar <b>tecnologia de ponta</b> com <b>criatividade e sensibilidade arquitetônica</b>, criamos um modelo
          de trabalho inovador, ágil e acessível. Nossa proposta é clara:
          <b> entregar projetos únicos, personalizados e funcionais</b>, que respeitam a identidade de cada cliente —
          tudo com uma abordagem moderna, transparente e com o apoio de ferramentas inteligentes como o BIM e recursos
          de inteligência artificial. Com isso, conseguimos otimizar tempo, reduzir custos e garantir um alto padrão de
          qualidade em cada detalhe. Aqui, você participa do processo do início ao fim. Ouvimos com atenção, orientamos
          com experiência e transformamos suas ideias em projetos que fazem sentido para sua rotina, seu estilo e seu
          investimento. Seja para construir do zero, reformar ou repensar um espaço, a WL está pronta para transformar
          seu sonho em realidade com <b>eficiência, inovação e muito propósito</b>.
        </p>
      </motion.div>
    </section>
  );
}
