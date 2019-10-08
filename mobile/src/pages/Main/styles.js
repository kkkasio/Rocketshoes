import styled from 'styled-components/native';
import { darken } from 'polished';
import Shimmer from 'react-native-shimmer-placeholder';
import colors from '../../styles/colors';

export const ShimmerImage = styled(Shimmer)`
  height: 197px;
  width: 197px;
  align-self: center;
  border-radius: 100px;
`;

export const Container = styled.View`
  background: ${colors.header};
`;

export const CardTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
`;

export const CardTitleText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
`;
export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16;
`;
export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  align-items: center;
  flex-direction: row;

  margin-top: auto;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 5px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
