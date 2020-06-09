import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Theme from '../styles/theme.style';

const { width, height } = Dimensions.get('screen');

const FormButton = ({ title, modeValue, danger, style, ...rest }) => {
  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      backgroundColor:
        modeValue !== 'text'
          ? !danger
            ? Theme.PRIMARY_COLOR
            : Theme.DANGER_COLOR
          : 'rgba(0,0,0,0)',
    },
    buttonContainer: {
      width: width / 2,
      height: height / 15,
      color: '#000',
    },
  });

  return (
    <Button
      style={[styles.button, style]}
      contentStyle={styles.buttonContainer}
      mode={modeValue}
      {...rest}>
      {title}
    </Button>
  );
};

export default FormButton;
