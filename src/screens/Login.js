import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import Input from '../components/Input';
import {colors, fonts} from '../global-styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkForSavedUser,setCheckingForSavedUser] = useState(false);

  const validUsername = 'test@test.com' === email;
  const validPassword = 'tester' === password;

  async function onLogin() {
    if (validUsername && validPassword) {
      setLoading(true);
      setError(false);
      await AsyncStorage.setItem('validUser', 'true');
      setTimeout(() => {
        setLoading(false);
        Actions.main();
      }, 2000);
    } else {
      setError(true);
    }
  }

  const checkForLoggedInUser = useCallback(async function() {
    const savedUser = await AsyncStorage.getItem('validUser');
    if (savedUser !== null) {
      Actions.main();
    }
    setCheckingForSavedUser(true);
  });

  useEffect(() => {
    checkForLoggedInUser();
  }, []);

  if(!checkForSavedUser){
    return null
  }

  return (
    <Container>
      <Input
        onChangeText={setEmail}
        value={email}
        label="Email"
        placeholder="Email"
      />
      <Input
        onChangeText={setPassword}
        value={password}
        label="Password"
        placeholder="Password"
        isSecure
      />
      <Button onPress={() => onLogin()}>
        <Label>Login</Label>
      </Button>
      {error && <Error>Invalid username or password</Error>}
      {loading && <Loader size="large" animating color={colors.manatee} />}
      <HintContainer>
        <Hint>username: test@test.com</Hint>
        <Hint>password: tester</Hint>
      </HintContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.linkedinBlue};
  margin-top: 10px;
`;

const Loader = styled.ActivityIndicator`
  margin-top: 10px;
`;

const Label = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-family: ${fonts.oswald};
`;

const Error = styled.Text`
  font-size: 18px;
  color: ${colors.red};
  font-family: ${fonts.oswald};
`;

const HintContainer = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

const Hint = styled.Text`
  font-size: 16px;
  color: ${colors.eastBay};
  font-family: ${fonts.oswald};
`;

export default Login;
