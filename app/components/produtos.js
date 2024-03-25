import React from 'react';

const ProductList_Component = ({ produtos }) => {
  return (
    <section className="flex flex-wrap justify-center gap-8 mt-8">
      {produtos.map(produto => (
        <div key={produto.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">{produto.titulo}</h2>
          <p>{produto.descricao}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">Comprar</button>
        </div>
      ))}
    </section>
  );
};

export default ProductList_Component;
