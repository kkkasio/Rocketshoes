/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { ProductList, LoadingList } from './styles';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
      });
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({
        products: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;
    console.log(loading);
    return (
      <>
        {loading ? (
          <LoadingList loading={loading ? 1 : 0}>
            <div>
              <FaSpinner color="#7159c1" size={60} />
              <small>carregando</small>
            </div>
          </LoadingList>
        ) : (
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
                <button
                  type="button"
                  onClick={() => this.handleAddProduct(product.id)}
                >
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                    {amount[product.id] || 0}
                  </div>
                  <span>Adicionar ao Carrinho</span>
                </button>
              </li>
            ))}
          </ProductList>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
