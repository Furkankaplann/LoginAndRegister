import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

// styles
import {customInputStyle} from '../styles';

// Icons
import {EyesCloseSVG, EyesSVG} from '../assets/icons';

const CustomInput = ({labelText}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  useEffect(() => {
    if (labelText == 'password') setSecureTextEntry(true);
  }, []);
  return (
    <View style={customInputStyle.container}>
      <Text style={customInputStyle.label}>{labelText}</Text>
      <View style={customInputStyle.inputWrapper}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={customInputStyle.textInput}
          placeholder={labelText}
        />
        {labelText == 'password' &&
          (secureTextEntry ? (
            <EyesCloseSVG
              onPress={() => setSecureTextEntry(false)}
              style={customInputStyle.icon}
            />
          ) : (
            <EyesSVG
              style={customInputStyle.icon}
              onPress={() => {
                setSecureTextEntry(true);
              }}
            />
          ))}
      </View>
    </View>
  );
};

export default CustomInput;
