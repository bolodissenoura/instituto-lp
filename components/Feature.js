import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Grades extras curriculares.",
  "Acompanhamento com psicóloga.",
  "Grupos de Estudos e Monitoria no I.E. Marques Moraes.",
  "Espaço para Expressão de Ideias e Sugestões Através de Assembleias.",
  "Projetos Estudantis com Reuniões e Propostas Inovadoras.",
  "Programas de Empreendedorismo Rentável Sócio Cultural.",
  "Educação Financeira: Preparando Jovens para o Futuro.",
  "Atividades Extracurriculares: Balé e Futebol para Infantil e Fundamental I.",
  "Aulas de Inglês, Música e Dança no I.E. Marques Moraes.",
  "Tae-kwon-do, Culinária e Projeto Cultura Maker.",
  "Projeto Sustentabilidade e Projeto Bilíngue.",
  "Parceria com a Escola de Idiomas UK: Método Callan para Ensino de Inglês."
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <h1 className="flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mb-20">
          METODOLOGIA
        </h1>
      </motion.div>  
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Fique por dentro dos metodos usados em nossa intituição
          </h3>
          <p className="my-2 text-black-500">
            Metodos estudados e comprovados para um amior rendimento educaional para seu filho.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        <iframe width="560" height="315" className="w-full sm:hidden mt-4" src="https://www.youtube.com/embed/5EQPkYhsNM4?si=ik4YnqVStIESMYiR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
