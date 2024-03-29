import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  margin: 0 15px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      border: 0;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.25, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: solid 1px #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      margin: 0 5px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  svg {
    transition: all 0.2s;
  }
  svg:hover {
    transform: scale(1.5);
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 25px;
  }

  div {
    text-align: center;

    h2 {
      color: #7159c1;
      line-height: 21px;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 25px;
      font-weight: 500;
      color: #666;
    }
  }

  a {
    background: #7159c1;
    padding: 12px 20px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background: ${darken(0.25, '#7159c1')};
    }
  }
`;
