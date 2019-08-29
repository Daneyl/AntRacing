import React from 'react';
import styled from 'styled-components/native';
import PieChart from '../../../components/PieChart';
import LabelField from '../components/LabelField';
import {colors, fonts} from '../../../global-styles';

type Props = {
  data: Object,
  percent: number,
};

const AntCard = ({data, percent}: Props) => {
  const {name, length, color, weight} = data;
  return (
    <Container>
      <Name>{name}</Name>
      <LabelField label="Length" value={length} />
      <LabelField label="Color" value={color} />
      <LabelField label="Weight" value={weight} />
      <ChartContainer>
        <PieChart width={70} height={70} percent={percent} />
      </ChartContainer>
      <WinLabel>Win %</WinLabel>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${colors.white};
  margin-bottom: 15px;
  border-radius: 10px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  shadow-color: ${colors.eastBay};
  shadow-offset: 1px 1px;
  elevation: 8;
`;

const Name = styled.Text`
  font-size: 20px;
  color: ${colors.linkedinBlue};
  font-family: ${fonts.oswald};
  font-weight: bold;
`;

const ChartContainer = styled.View`
  position: absolute;
  right: 20px;
  bottom: 35%;
`;

const WinLabel = styled.Text`
  position: absolute;
  bottom: 10px;
  right: 10%;
  font-size: 16px;
  color: ${colors.eastBay};
  font-family: ${fonts.oswald};
`;

export default AntCard;
