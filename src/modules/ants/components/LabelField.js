import React from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '../../../global-styles';

type Props = {
  label: String,
  value: String,
};

const LabelField = ({label, value}: Props) => {
  return (
    <Container>
      <Label>{`${label}:`}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 3px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${colors.eastBay};
  font-family: ${fonts.oswald};
`;

const Value = styled.Text`
  font-size: 16px;
  color: ${colors.manatee};
  font-family: ${fonts.oswald};
  margin-left: 20px;
`;

export default LabelField;
