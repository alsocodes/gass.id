import About from '../components/About';
import Product from '../components/Product';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Contact from '../components/Contact';
import ProductGroup from '../components/ProductGroup';

export default function Home() {
  return (
    <>
      <SeoHead title='GASS.ID | PT. Global Andalan Solusi Sukses' />
      <Layout>
        <Hero />
        <About />
        <ProductGroup />
        <Contact />
      </Layout>
    </>
  );
}
