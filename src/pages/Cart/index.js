import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-asics-gel-quantum-90-masculino/36/D18-3058-036/D18-3058-036_detalhe1.jpg?resize=280:280"
                alt=""
              />
            </td>
            <td>
              <strong>Tenis massa</strong>
              <span>R$ 129,90</span>
            </td>

            <td>
              <div>
                <button disabled="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" value="2" readOnly />

                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
