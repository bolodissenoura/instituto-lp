import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const horarios = [
  "Horário Integral: Funcionamento das 7h30 às 17h30.",
  "Horário Infantil: Funcionamento das 8h às 12h ou das 13h às 17h.",
  "Horário Fundamental I: Funcionamento das 7h30 às 12h ou das 13h às 17h30.",
  "Horário Fundamental II e Ensino Médio: Funcionamento das 7h30 às 12h30.",
  "Atividades Complementares Remotas para Fundamental II e Ensino Médio."
];

const Horario = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <h1 className="flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            HORÁRIOS
          </h1>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/horarios.svg"
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
              Nosso horário de funcionamento é variado
            </h3>
            <p className="my-2 text-black-500">
              Para melhor atender às diferentes necessidades dos alunos e famílias.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {horarios.map((item, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={item}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {item}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Horario;
