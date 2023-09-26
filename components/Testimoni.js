import React, { useState, useMemo } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Educação Infantil",
      image: "",
      city: "0 a 6 anos",
      country: "",
      rating: "",
      testimoni:
        "Nossa Educação Infantil: onde a curiosidade floresce, os amigos são encontrados e o aprendizado ganha vida!",
    },
    {
      name: "Ensino Fundamental",
      image: "",
      city: "1º ao 9º",
      country: "",
      rating: "",
      testimoni:
        "No Ensino Fundamental, construímos alicerces sólidos para um futuro de aprendizado contínuo. É um lugar onde a imaginação floresce, as amizades são forjadas e o conhecimento se expande",
    },
    {
      name: "Ensino Medio",
      image: "",
      city: "1º ao 3º",
      country: "",
      rating: "",
      testimoni:
        "No Ensino Médio, estamos moldando líderes, pensadores críticos e cidadãos responsáveis. É uma jornada de descoberta, crescimento e preparação para os desafios e oportunidades que aguardam nossos alunos após a graduação",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <h1 className="mb-20 flex flex-col items-center justify-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          SEGMENTOS
        </h1>
      </motion.div>  
      </ScrollAnimationWrapper>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}> 
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon class"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-left">{listTestimonis.testimoni}.</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimoni;
