import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/about";
import Contact from "../components/contact";
import { benefitTwo } from "../components/data"

export default function Home() {
  return (
    <>
      <SeoHead title='Instituto' />
      <Layout>
        <Hero />
        <div />
        <About />
        <div id="metodologia"/>
        <Feature />
        <div id="segmentos"/>
        <Pricing />
        <Contact imgPos="right" data={benefitTwo} />
      </Layout>
    </>
  );
}
