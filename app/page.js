import Link from 'next/link';
import data from "./api.json";
import Carousel_Component from './components/carousel';
import ProductList_Component from './components/produtos';
import Nav_bar_component from './components/nav';
import Footer from "./components/footer"


export default function Home() {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
      <Carousel_Component items={data.carrossel}></Carousel_Component>
      <div className='flex m-auto w-full justify-center mt-6'>  
        <h1 className='font-protest-guerrila flex text-5xl text-zinc-50 drop-shadow-lg'>Com a FightStock, o poder está sempre em suas mãos</h1>
      </div>
      <div className='flex m-auto mt-12 w-full justify-center'>  
        <h1 className='font-protest-guerrila flex text-3xl text-zinc-50 drop-shadow-lg'>Conheça nossos produtos</h1>
      </div>
      <ProductList_Component produtos={data.produtos}></ProductList_Component>
      <Footer footer={data.footer}></Footer>
    </main>
  );
}
