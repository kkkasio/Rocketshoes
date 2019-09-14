import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

//redux
import { connect } from 'react-redux';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <small>
            {cartSize
              ? cartSize === 1
                ? cartSize + ' item'
                : cartSize + ' itens'
              : 'Vazio'}
          </small>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
