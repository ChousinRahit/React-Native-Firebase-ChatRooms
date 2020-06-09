import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const AvatarComp = ({
  size = 60,
  backgroundColor = '#eee',
  textColor = '#666',
  style,
  name,
  uri
}) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2
    },
    textStyle: {
      color: textColor
    }
  });

  console.log(uri, 'URI');

  if (uri) {
    return (
      <Avatar
        size={26}
        style={[style, styles.container, { tintColor: null }]}
        source={uri}
      />
    );
  }

  const initial = name.split(' ').reduce((p, n) => p + n[0], '');

  return (
    <View style={[style, styles.container]}>
      <Text
        style={[{ fontSize: size / initial.length }, styles.textStyle]}
        adjustsFontSizeToFit={true}>
        {initial}
      </Text>
    </View>
  );
};

export default AvatarComp;
