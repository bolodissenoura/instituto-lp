import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ButtonInstagram from "./misc/ButtonInstagram";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Galery = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <h1 className="mb-20 flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">Galeria</h1>
        <div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery4.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery2.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery3.jpg" alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery1.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery5.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery13.jpg" alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery11.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery8.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery9.jpg" alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery10.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery12.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/assets/Galery/Galery6.jpg" alt=""/>
                </div>
            </div>
          </div>
          <ButtonInstagram>Veja mais Fotos</ButtonInstagram>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>

  );
};

export default Galery;