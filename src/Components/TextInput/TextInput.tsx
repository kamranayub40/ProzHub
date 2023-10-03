import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {primary, secondary} from '../../Stylings/Colors';
import styles from './TextInput.Styles';
import {Medium} from '../../Stylings/Font.Family';
const Text_Input = ({
  placeholder,
  value,
  width,
  maxLength,
  onChangeText,
  secureTextEntry,
  keyboardType,
  icon,
  backgroundColor,
  editable,
  disabled,
  defaultValue,
  error,
  getCode,
  // countryCode,
  error2,
  error3,
  onSelect,
  onFocus,
  IsFocus,
  onBlur,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={secondary}
        value={value}
        onChangeText={onChangeText} // Use handleInputChange to handle input trimming
        onBlur={onBlur}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        editable={editable}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        maxLength={maxLength}
        style={[styles.textInput]}
      />
    </View>
  );
};
export default Text_Input;
