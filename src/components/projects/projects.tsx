"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "./projects-data";

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pb-20 bg-[#f1f1f1]" id="projetos">
      <motion.div
        className="max-w-4xl text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-6xl font-light mt-10 mb-6 text-darkYellow">Projetos</h2>
        <p className="text-lg font-light text-lightGrey">
          Confira alguns dos nossos projetos que unem estética, funcionalidade e inovação.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-md shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl cursor-pointer flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
          >
            <div className="w-full h-60 relative mb-4">
              <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" className="rounded" />
            </div>
            <h3 className="text-md font-bold text-gray-800 text-center">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{item.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
