import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

function Cart() {
  return (
    <Container>
      <Product>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <ProductDetails>
            <ProductTitle>titulo do produto</ProductTitle>
            <ProductPrice>$ 199,00</ProductPrice>
          </ProductDetails>
          <ProductDelete onPress={() => {}}>
            <Icon name="delete-forever" color={colors.primary} size={24} />
          </ProductDelete>
        </ProductInfo>

        <ProductControls>
          <ProductControlsButton>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlsButton>

          <ProductAmount value={String(5)} />

          <ProductControlsButton>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlsButton>
          <ProductSubTotal>R$ 887,14</ProductSubTotal>
        </ProductControls>
      </Product>

      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalAmount>R$ 1987,10</TotalAmount>
        <Order>
          <OrderText>Finalizar Pedido</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}

export default Cart;
