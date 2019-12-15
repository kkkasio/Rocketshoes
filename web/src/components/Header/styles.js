import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin: 50px 0;
  transition: all 4s;

  @media (max-width: 600px) {
    img {
      width: 230px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    small {
      color: #797979;
      font-size: 13px;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
