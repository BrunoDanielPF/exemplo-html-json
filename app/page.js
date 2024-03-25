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
      <ProductList_Component produtos={data.produtos}></ProductList_Component>
      <Footer footer={data.footer}></Footer>
      {/* <footer className="w-full bg-gray-800 text-white py-4 px-8 mt-8">
        {data.footer.links_uteis.map((link) => (
          <Link href={link.url}>
            <p key={link.id}>{link.titulo}</p>
          </Link>
        ))}
        <p>{data.footer.contato.telefone}</p>
        <p>{data.footer.contato.email}</p>
        <p>{data.footer.contato.endereco}</p>
        {data.footer.redes_sociais.map((items) => (
          <Link href={`$items.url`}>
           <p>{items.nome}</p>
          </Link>
        )) 
        }
      </footer> */}
    </main>
  );
}
