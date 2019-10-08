/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import {Text, View, FlatList, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CardTitle,
  CardTitleText,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import colors from '../../styles/colors';

import api from '../../services/api';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    this.setState({products: response.data});
  };

  handleAddProduct = id => {
    Alert.alert(`Adicionado ${id}`);
  };

  renderProduct = ({item}) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>R$: 179,90</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <CardTitle>
          <CardTitleText>Novos Produtos</CardTitleText>
          <CardTitleText>Ver mais</CardTitleText>
        </CardTitle>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Main;
