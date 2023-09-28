import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <h1 className="flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mb-20">
          O que é OSC?
        </h1>
      </motion.div>  
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2">
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-start justify-center w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Explicando o OSC
          </h3>
          <p className="my-2 text-black-500">
            A publicação Organização da sociedade civil e escola pública: uma parceria que transforma (2015), do Prêmio Itaú-Unicef, informa que OSC é “toda e qualquer entidade que desenvolva projetos sociais com finalidade pública”.
            A obra assume ainda a definição da Associação Brasileira de Organizações Não Governamentais (Abong): “servem à comunidade, realizam um trabalho de promoção da cidadania e defesa dos direitos coletivos, lutam contra a exclusão, contribuem para o fortalecimento dos movimentos sociais e para a formação de suas lideranças, visando à constituição e ao pleno exercício de novos direitos sociais, incentivam e subsidiam a participação popular na formulação e implementação das políticas públicas”.
          </p>
          <h3 className="my-2 text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Como se realiza a parceria
          </h3>
          <p className="my-2 text-black-500">
            Atenta à complexidade do ser humano e à incompletude das instituições, a educação integral demanda uma multiplicidade de olhares e exige a interlocução e integração de vários atores, o que resulta na compreensão de que a escola e os demais espaços educativos da comunidade devem se reconhecer como intercomplementares.
            Ainda nessa perspectiva ampliada, a educação integral, de acordo com o regulamento da 11ª edição do Prêmio Itaú-Unicef, se concretiza em ações socioeducativas “por meio de projetos com intencionalidade educativa que, desenvolvidos pela parceria entre organizações da sociedade civil e escolas públicas – articulados com outros espaços do território –, asseguram a aprendizagem e o direito ao desenvolvimento integral de crianças, adolescentes e jovens”.
          </p>
        </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/lapis.jpg"
              alt="OSC Illustrasi"
              layout="responsive"
              quality={100}
              height={800}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;