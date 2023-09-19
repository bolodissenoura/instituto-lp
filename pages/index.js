import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/about";

export default function Home() {
  return (
    <>
      <SeoHead title='Instituto' />
      <Layout>
        <Hero />
        <div id="about"/>
        {/* <About /> */}
        <div id="metodologia"/>
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
