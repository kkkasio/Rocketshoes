import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const LoadingList = styled.div`
  background: #fff;
  max-width: 250px;
  height: 100px;
  margin: 80px auto 0;
  padding: 10px;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;

    small {
      margin-top: 10px;
    }
    ${props =>
      props.loading &&
      css`
        svg {
          animation: ${rotate} 2.5s linear infinite;
        }
      `}
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 0 15px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      line-height: 20px;
      margin: 5px 0 20px;
      font-weight: bold;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      overflow: hidden;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.25, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.2);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 990px) {
    li {
      max-width: 290px;
      img {
      }
    }
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
    li {
      max-width: 100%;
    }
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`;
