import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';
import { Container, ProductTable, Total, EmptyCart } from './styles';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>

                  <td>
                    <div>
                      <button disabled="button">
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
                        onClick={() => removeFromCart(product.id)}
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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
