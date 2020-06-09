import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  Appbar,
  List,
  Divider,
  TextInput,
  IconButton,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context as ContactsContext } from '../context/contactsContext';
import Contact from '../components/contact';
import { ScrollView } from 'react-native-gesture-handler';

const TimeLineScreen = () => {
  return (
    <ScrollView>
      <Appbar.Header
        statusBarHeight={20}
        style={{ backgroundColor: '#7D5BA6' }}>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </ScrollView>
  );
};

export default TimeLineScreen;

const styles = StyleSheet.create({});
