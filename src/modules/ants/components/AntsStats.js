// @flow
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import styled from 'styled-components/native';
import AntCard from './AntCard';
import {colors, fonts} from '../../../global-styles';

type Props = {
  ants: Array,
  winLikelyhoods: Array<number>,
};

const AntsStats = ({ants, winLikelyhoods}: Props) => {
  const isLoading = ants.length === 0;
  return (
    <Container>
      <HeadingContainer>
        <Heading>Ants</Heading>
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
            contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 10}}
            style={{flex: 1, width: '100%'}}
            data={ants}
            keyExtractor={(_, index) => String(index)}
            renderItem={({item, index}) => (
              <AntCard
                key={index}
                data={item}
                percent={winLikelyhoods[index]}
              />
            )}
          />
        )}
      </ScrollableArea>
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
  padding: 20px;
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

export default AntsStats;
