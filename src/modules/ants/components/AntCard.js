import React from 'react';
import styled from 'styled-components/native';
import PieChart from '../../../components/PieChart';
import LabelField from '../components/LabelField';
import {colors, fonts} from '../../../global-styles';

type Props = {
  data: Object,
  percent: number,
  isWinner: Boolean,
};

const AntCard = ({data, percent, isWinner}: Props) => {
  const {name, length, color, weight, state} = data;

  return (
    <Container bgColor={isWinner ? colors.parrotGreen : colors.white}>
      <Name>{name}</Name>
      <LabelField label="Length" value={length} />
      <LabelField label="Color" value={color} />
      <LabelField label="Weight" value={weight} />
      <RaceState>{state}</RaceState>
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
  background-color: ${props => props.bgColor};
  margin-bottom: 15px;
  border-radius: 10px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  shadow-color: ${colors.eastBay};
  shadow-offset: 1px 1px;
  elevation: 8;
`;

const Name = styled.Text`
  font-size: 18px;
  color: ${colors.linkedinBlue};
  font-family: ${fonts.oswald};
  font-weight: bold;
`;

const ChartContainer = styled.View`
  position: absolute;
  right: 20px;
  bottom: 35%;
`;

const RaceState = styled.Text`
  position: absolute;
  top: 10px;
  right: 10%;
  font-size: 16px;
  color: ${colors.eastBay};
  font-family: ${fonts.oswald};
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
