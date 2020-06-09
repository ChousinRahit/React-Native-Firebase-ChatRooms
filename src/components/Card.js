import React, { Fragment, useState } from 'react';
import { StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

import {
  Text,
  List,
  Divider,
  Surface,
  Title,
  Subheading,
  Caption,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Card = ({ header, details, actions = [] }) => {
  if (Array.isArray(details)) {
    return (
      <Fragment>
        <Caption style={styles.cardHeader}>{header}</Caption>
        <Divider />
        {details.map(task => (
          <View key={task.id}>
            <List.Item
              // right={() => <List.Icon color="#7D5BA6" icon="dots-vertical" />}
              left={() => <List.Icon color="#7D5BA6" icon="minus" />}
              title={<Text>{task.task}</Text>}
              description={
                <Text style={{ color: '#5C5C5C' }}>{task.task}</Text>
              }
            />
            <Divider style={styles.divider} />
          </View>
        ))}
      </Fragment>
    );
  }

  return (
    <Surface level="1" style={styles.card}>
      <Caption style={styles.cardHeader}>{header}</Caption>
      {/*<Divider style={styles.shortDivider} />*/}

      <Divider />
      <View style={styles.cardDetailsWrapper}>
        <Title style={styles.cardDetails} selectionColor="#7D5BA6">
          {' '}
          {details}
        </Title>
        <View style={styles.cardIconsWrapper}>
          {actions.map(action => {
            return (
              <MaterialCommunityIcons
                style={{ marginRight: 25, color: '#7D5BA6' }}
                key={action.iconName}
                name={action.iconName}
                size={24}
                onPress={() => Linking.openURL(action.link)}
              />
            );
          })}
        </View>
      </View>
    </Surface>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    color: 'red',
    minHeight: 144,
  },
  card: {
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  cardHeader: {
    padding: 10,
    marginLeft: 5,
    color: '#7D5BA6',
    fontSize: 14,
    // fontWeight: 'bold',
    // letterSpacing: 1,
  },
  cardDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  cardIconsWrapper: {
    flexDirection: 'row',
  },
  cardDetails: {
    color: '#14171a',
    letterSpacing: 0.5,
    fontWeight: '400',
  },
  list: {
    padding: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  divider: {
    height: 1.5,
  },
});
