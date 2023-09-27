import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Osc from "../components/Osc";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/about";
import Contact from "../components/contact";
import Galery from "../components/galery";
import { benefitTwo } from "../components/data";

export default function Home() {
  return (
    <>
      <SeoHead title="Instituto" />
      <Layout>
        <Hero />
        <div id="about"/>
        <Osc />
        <About />
        <div id="metodologia" />
        <Feature />
        <div id="segmentos" />
        <Pricing />
        <div id="galeria" />
        <Osc />
        <Galery />
        <div id="contato" />
        <Contact imgPos="right" data={benefitTwo} />
      </Layout>
    </>
  );
}
