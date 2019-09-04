// @flow
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styled from 'styled-components/native';
import {actions} from '../modules/ants';
import AntsStats from '../modules/ants/components/AntsStats';
import {colors, fonts} from '../global-styles';

const Home = () => {
  const dispatch = useDispatch();
  const loadAnts = () => dispatch(actions.loadAnts());
  const reset = () => dispatch(actions.resetRace());

  const data = useSelector(state => state.ants.antsList);
  const isRaceFinished = useSelector(state => state.ants.isRaceFinished);
  const isRacing = useSelector(state => state.ants.isRacing);

  const onStartRace = data => dispatch(actions.startRace(data));

  function sortAnts(data = []) {
    const sortedAnts = [...data].sort(function(a, b) {
      return b.winLikelyhood - a.winLikelyhood;
    });
    return sortedAnts;
  }

  async function onLogout(){
    await AsyncStorage.removeItem('validUser');
    Actions.pop();
  }

  useEffect(() => {
    loadAnts();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Button
        onPress={() => onLogout()}
        disabled={isRacing}
        color={isRacing ? colors.solitude : colors.linkedinBlue}>
        <Label>Logout</Label>
      </Button>
      <Controller>
        <Button
          onPress={() => onStartRace(data)}
          disabled={isRacing}
          color={isRacing ? colors.solitude : colors.linkedinBlue}>
          <Label>Start Race</Label>
        </Button>
        <Button
          disabled={!isRaceFinished}
          onPress={() => reset()}
          color={isRaceFinished ? colors.linkedinBlue : colors.solitude}>
          <Label>Reset Race</Label>
        </Button>
      </Controller>
      {<AntsStats ants={sortAnts(data)} />}
    </SafeAreaView>
  );
};

const Controller = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 5px 15px;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  padding: 8px 50px;
  align-self: center;
  background-color: ${props => props.color};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Label = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-family: ${fonts.oswald};
`;

export default Home;
