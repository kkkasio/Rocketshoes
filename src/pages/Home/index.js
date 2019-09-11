import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
          alt=""
        ></img>
        <strong>Tênis muito legal</strong>
        <span>129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
