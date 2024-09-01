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
              className={`items-center w-full ${data.imgPos === "right" ? "lg:justify-end" : ""
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
                  <a href="https://www.google.com/maps/place/R.+Utah,+300+-+Jardim+Florida,+Jacare%C3%AD+-+SP,+12321-720/data=!4m2!3m1!1s0x94cdcca1b23e7427:0xa53af75f86cd5d5c?sa=X&ved=1t:242&ictx=111">Clique aqui para ir com Google Maps</a>
                  <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl dark:text-gray-300">
                    O Instituto Educacional Marques Moraes conta com uma infraestrutura completa que inclui laboratório de ciências, quadra de esportes descoberta, biblioteca, sala de leitura, parque infantil, berçário, refeitório, pátio coberto e descoberto, área verde e acesso à internet. Tudo isso aliado a uma alimentação adequada para os estudantes.
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
