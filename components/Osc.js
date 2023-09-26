import React, { useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Osc = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper className="relative w-full mt-16">
      <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 ">
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 sm:mb-0">
              <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Pague menos impostos e ainda ajude a educação.
              </h5>
              <p>Conheça a OSC, programa no qual fomos aprovados, e saiba como reduzir impostos em sua empresa.</p>
            </div>
            <ButtonPrimary>Conhecer OSC</ButtonPrimary>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default Osc;
