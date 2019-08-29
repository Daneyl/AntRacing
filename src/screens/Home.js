// @flow
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {actions} from '../modules/ants';
import AntsStats from '../modules/ants/components/AntsStats';

const Home = () => {
  const dispatch = useDispatch();
  const loadAnts = () => dispatch(actions.loadAnts());

  const data = useSelector(state => state.ants.antsList);
  const winLikelyhoods = useSelector(state => state.ants.winLikelyhoods);

  useEffect(() => {
    loadAnts();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <AntsStats ants={data} winLikelyhoods={winLikelyhoods} />
    </SafeAreaView>
  );
};

export default Home;
