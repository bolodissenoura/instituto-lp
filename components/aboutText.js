import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <h1 className="flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mb-20">
            SOBRE NÓS
          </h1>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-start justify-center w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
              Bem-Vindos à Instituto Educacional Marques Moraes
            </h3>
            <p className="my-2 text-black-500">
              O Instituto Educacional Marques Moraes tem, ao longo dos seus 10 anos de existência, se empenhado em proporcionar uma educação integral que vai além de um simples espaço físico. Com uma abordagem centrada na crença de que “Escola não é Prédio, Escola são pessoas”, atendemos desde o Berçário até o Ensino Médio, oferecendo jornadas no período da manhã, tarde ou integral. A nossa missão é clara: promover um Ensino de Formação para a Vida, focado em Ética, Cidadania e Valores essenciais.
            </p>
            <h3 className="my-2 text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
              Nossa Missão:
            </h3>
            <p className="my-2 text-black-500">
              Utilizando uma Metodologia baseada em Projetos Interdisciplinares, Inteligências Múltiplas e Emocionais, nosso objetivo maior é desenvolver a autonomia e a autoconfiança dos alunos. Contamos com o apoio da plataforma de ensino Geekie One, que promove uma aprendizagem ativa e personalizada, além de facilitar a conexão e a visibilidade do processo educativo. Esta parceria, somada à nossa proposta pedagógica do “Fazer a Ponte”, permite que os alunos se tornem mais conscientes e transformadores.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <iframe width="560" height="315" className="w-full" src="https://www.youtube.com/embed/C1_CXu4_-L8?si=0NmICjUHKofwjH2J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* <Image
              src="/assets/undraw_family.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            /> */}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;