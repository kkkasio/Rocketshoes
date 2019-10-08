import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
`;
export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  margin-left: 10px;
  flex: 1;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductControlsButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const TotalText = styled.Text`
  text-transform: uppercase;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: auto;
  border-radius: 4px;
  padding: 10px;
`;

export const OrderText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const EmptyCart = styled.View`
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24;
  margin-top: 14px;
  font-weight: bold;
`;
