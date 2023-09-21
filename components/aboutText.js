import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Parceria com GeekOne.",
  "Grades extras curriculares.",
  "Sistema de pagamento X.",
  "Sistema de pagamento X.",
  "Sistema de pagamento X.",
  "Sistema de pagamento X.",
  "Sistema de pagamento X.",
  "Sistema de pagamento X.",
  "acompanhamento com psicologa."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <h1 className="flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          SOBRE NÓS
        </h1>
      </motion.div>  
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Bem-Vindos à Instituto Educacional Marques Moraes
          </h3>
          <p className="my-2 text-black-500">
          Na Escola EM Marques Moraes, estamos comprometidos com a excelência educacional e o desenvolvimento integral de nossos alunos. Somos uma instituição que se orgulha de oferecer uma educação de alta qualidade, que vai além do ensino tradicional. Aqui, moldamos mentes jovens para se tornarem cidadãos conscientes, críticos e capazes de enfrentar os desafios do século XXI.
          </p>
          <h3 className="my-2 text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Nossa Missão:
          </h3>
          <p className="my-2 text-black-500">
          Nossa missão é inspirar, educar e capacitar cada aluno a atingir seu máximo potencial acadêmico, social e pessoal. Acreditamos que cada criança é única e traz consigo talentos e habilidades especiais. Nossa abordagem pedagógica visa identificar e nutrir esses talentos, ao mesmo tempo que fornecemos uma base sólida de conhecimento e valores.
          </p>
        </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/undraw_family.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;