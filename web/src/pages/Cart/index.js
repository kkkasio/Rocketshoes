import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, EmptyCart } from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <div>
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
              {cart.map(product => (
                <tr key={product.title}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>

                  <td>
                    <div>
                      <button type="button" disabled="button">
                        <MdRemoveCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => decrement(product)}
                        />
                      </button>
                      <input type="number" value={product.amount} readOnly />

                      <button type="button">
                        <MdAddCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => increment(product)}
                        />
                      </button>
                    </div>
                  </td>

                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete
                        size={20}
                        color="#7159c1"
                        onClick={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">Finalizar Pedido</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </div>
      ) : (
        <EmptyCart>
          <MdShoppingCart size={50} color="#7159c1" />
          <div>
            <h2>Seu carrinho está vazio</h2>
            <p>
              Adicione produtos clicando no botão “Comprar” na página de
              produto.
            </p>
            <Link to="/">voltar para página inicial</Link>
          </div>
        </EmptyCart>
      )}
    </Container>
  );
}
