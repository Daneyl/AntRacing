// @flow
import React from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '../global-styles';

type Props = {
  onChangeText: Function,
  value: String,
  label: String,
  placeholder: String,
  isSecure: Boolean,
};

const Input = ({
  onChangeText,
  value,
  label,
  placeholder,
  isSecure = false,
}: Props) => {
  return (
    <>
      <Label>{label}</Label>
      <InputField
        selectionColor={colors.eastBay}
        placeholder={placeholder}
        placeholderTextColor={colors.manatee}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize="none"
      />
    </>
  );
};

const InputField = styled.TextInput`
  width: 80%;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border-color: ${colors.eastBay};
  border-width: 2px;
  margin-bottom: 10px;
  font-family: ${fonts.oswald};
`;

const Label = styled.Text`
  font-size: 18px;
  color: ${colors.linkedinBlue};
  margin-bottom: 5px;
  font-family: ${fonts.oswald};
`;

export default Input;
