/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import colors from '../../styles/colors';
import {
  Container,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlsButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyCart,
  EmptyCartText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <>
          {cart.map(product => (
            <Product key={String(product.id)}>
              <ProductInfo>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDetails>
                <ProductDelete
                  onPress={() => {
                    removeFromCart(product.id);
                  }}>
                  <Icon
                    name="delete-forever"
                    color={colors.primary}
                    size={24}
                  />
                </ProductDelete>
              </ProductInfo>

              <ProductControls>
                <ProductControlsButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductControlsButton>

                <ProductAmount value={String(product.amount)} />

                <ProductControlsButton onPress={() => increment(product)}>
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductControlsButton>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductControls>
            </Product>
          ))}
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>Finalizar Pedido</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" color={colors.primary} size={64} />
          <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
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
