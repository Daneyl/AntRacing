import React, { useRef, memo } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import {Ant} from './Icons';

const AntsWalking = () => {
    const screenWidth = Dimensions.get('window').width;
    const width = screenWidth / 3;
    const animatedWidth = useRef(new Animated.Value(-width));

    const animate = () => 
        Animated.timing(animatedWidth.current, {
            duration: 2000,
            toValue: 0,
        }).start(() => {
            animatedWidth.current.setValue(-width);
             animate();
        });

    animate();

    return (
        <Container style={{ marginLeft: animatedWidth.current }}>
            <AntContainer width={width}>
                <Ant />
            </AntContainer>
            <AntContainer width={width}>
                <Ant />
            </AntContainer>
            <AntContainer width={width}>
                <Ant />
            </AntContainer>
            <AntContainer width={width}>
                <Ant />
            </AntContainer>
        </Container>
    );
};

const Container = styled(Animated.View)`
    flex-direction: row;
`;

const AntContainer = styled.View`
    width: ${({ width }) => width}px;
    height: 30px;
`

export default memo(AntsWalking);