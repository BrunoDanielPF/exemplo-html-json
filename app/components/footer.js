import Link from 'next/link';

const Footer = ({ footer }) => {
  const renderFooterLinks = () => (
    footer.links_uteis.map(link => (
      <Link href={`$link.url`} key={link.id}>
        <p>{link.titulo}</p>
      </Link>
    ))
  );

  const renderRedesSociais = () => (
    footer.redes_sociais.map(item => (
      <Link href={`$item.url`} key={item.id}>
        <p>{item.nome}</p>
      </Link>
    ))
  );

  return (
    <footer className="w-full bg-[#180606] text-white py-4 px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold mb-2">Links Úteis</h2>
          {renderFooterLinks()}
        </div>
        <div>
          <h2 className="font-bold mb-2">Contato</h2>
          <p>{footer.contato.telefone}</p>
          <p>{footer.contato.email}</p>
          <p>{footer.contato.endereco}</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Redes Sociais</h2>
          {renderRedesSociais()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
