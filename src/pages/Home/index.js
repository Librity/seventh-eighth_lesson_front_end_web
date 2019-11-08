import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://cdn.shopify.com/s/files/1/1718/2067/products/basso-ruby-light-sneakers-sneakers-black-purple-us-4-eu-35-4420149280791_2000x.png?v=1559802085"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://cdn.shopify.com/s/files/1/1718/2067/products/basso-ruby-light-sneakers-sneakers-black-purple-us-4-eu-35-4420149280791_2000x.png?v=1559802085"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://cdn.shopify.com/s/files/1/1718/2067/products/basso-ruby-light-sneakers-sneakers-black-purple-us-4-eu-35-4420149280791_2000x.png?v=1559802085"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://cdn.shopify.com/s/files/1/1718/2067/products/basso-ruby-light-sneakers-sneakers-black-purple-us-4-eu-35-4420149280791_2000x.png?v=1559802085"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
