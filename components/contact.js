import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Container from "./container";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const Benefits2 = (props) => {
  const { data } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <Container className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto ">
            <div
              className={`items-center w-full ${
                data.imgPos === "right" ? "lg:justify-end" : ""
              }`}>
              <div>
                <div className="max-w-screen-xl mx-auto">
                  <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black-800 lg:leading-tight lg:text-4xl">
                    {data.title}
                  </h3>

                  <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl dark:text-gray-300">
                    {data.desc}
                  </p>
                </div>

                <div className="w-full mt-5">
                  {data.bullets.map((item, index) => (
                    <Benefit2 key={index} title={item.title} icon={item.icon}>
                      {item.desc}
                    </Benefit2>
                  ))}
                </div>
                  <div className="flex flex-col w-full mt-4">
                    <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl dark:text-gray-300">
                      Por favor, sinta-se à vontade para nos contatar a qualquer momento. Estamos ansiosos para ouvir de você e para responder a todas as suas perguntas. Seja para agendar uma visita, obter informações sobre inscrições ou apenas para compartilhar suas ideias, estamos aqui para ajudar. Sua opinião e feedback são fundamentais para continuarmos melhorando e proporcionando a melhor experiência educacional possível.
                    </p>
                  </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

function Benefit2(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-orange-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-orange-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium ">
            {props.title}
          </h4>
          <p className="mt-1">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits2;
