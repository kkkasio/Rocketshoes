import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';
import { Container, ProductTable, Total, EmptyCart } from './styles';

function Cart({ cart, dispatch }) {
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
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" value={product.ammount} readOnly />

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
                      <MdDelete
                        size={20}
                        color="#7159c1"
                        onClick={() =>
                          dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
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
              <strong>R$ 1920,28</strong>
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
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
