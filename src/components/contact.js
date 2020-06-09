import React from 'react';
import { StyleSheet } from 'react-native';
// import Avatar from './Avatar';
import { Headline, List, Button, Avatar, Title } from 'react-native-paper';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    alignItems: 'center',
  },
  textLayout: {
    flexDirection: 'column',
  },
});
// const StarIcon = props => <Button {...props} icon="adchoices" />;

const Contact = ({ item, onPress }) => {
  console.log(item);
  return (
    <List.Item
      right={() => <List.Icon color="#000" icon="chevron-right" />}
      title={<Title>{item.name}</Title>}
      description={item.pos}
      left={props => (
        <Avatar.Image
          {...props}
          size={60}
          source={require('../assets/img/dp.jpg')}
          name={item.name}
        />
      )}
      onPress={onPress}
    />
  );
};

export default Contact;
