This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hook useSelector (redux) 🚀

Every time we need to access redux state information we use the **useSelector**

```jsx
import { useSelector } from 'react-redux';
...

const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );
```

## Hook useDispatch (redux) 🚀

Every time we need to tigger an action for redux we use **useDispatch**

```jsx
const dispatch = useDispatch();

function increment(product) {
  dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
}
```
