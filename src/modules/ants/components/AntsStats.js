// @flow
import React, {useEffect, useRef, useCallback} from 'react';
import {ActivityIndicator, FlatList, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import AntCard from './AntCard';
import AntsWalking from '../../../components/AntsWalking';
import {colors, fonts} from '../../../global-styles';

type Props = {
  ants: Array,
};

const AntsStats = ({ants}: Props) => {
  const isLoading = ants.length === 0;
  const isRaceFinished = useSelector(state => state.ants.isRaceFinished);

  return (
    <Container>
      <HeadingContainer>
        <Heading>Ants Racing</Heading>
      </HeadingContainer>
      <ScrollableArea
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}>
        {isLoading && <ActivityIndicator size="large" color="grey" />}
        {!isLoading && (
          <FlatList
            contentContainerStyle={{
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
            style={{flex: 1, width: '100%'}}
            data={ants}
            extraData={ants}
            keyExtractor={item => String(item.name)}
            renderItem={({item, index}) => (
              <AntCard
                isWinner={isRaceFinished && index === 0}
                key={item.name}
                data={item}
                percent={item.winLikelyhood}
              />
            )}
          />
        )}
      </ScrollableArea>
      <BottomFixed>
        <AntsWalking />
      </BottomFixed>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const ScrollableArea = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${colors.white};
`;

const HeadingContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${colors.commentBackground};
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.eastBay};
  font-family: ${fonts.oswald};
`;

const BottomFixed = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: ${colors.white};
`;

export default AntsStats;
    