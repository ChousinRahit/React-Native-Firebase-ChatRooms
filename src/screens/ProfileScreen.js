import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Appbar,
  List,
  Divider,
  Avatar,
  Title,
  Caption,
  Paragraph,
} from 'react-native-paper';
import { Context as ContactsContext } from '../context/contactsContext';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/Card';

const socialIcons = [
  { name: 'linkedin', iconName: 'social-linkedin', link: '', color: '#007bb5' },
  { name: 'twitter', iconName: 'social-twitter', link: '', color: '#1da1f2' },
  { name: 'github', iconName: 'social-github', link: '', color: '#24292e' },
  { name: 'skype', iconName: 'social-skype', link: '', color: '#00aff0' },
];

const ProfileScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { state } = useContext(ContactsContext);
  const member = state.find(mem => mem.id === itemId);

  const phoneActions = [
    { iconName: 'phone', link: `tel:+91 8217454919` },
    { iconName: 'message-text', link: `sms:+91 8217454919` },
  ];

  const emailActions = [
    { iconName: 'email', link: `mailto:2428kcr@gmail.com` },
  ];

  const tasks = [
    { id: 1, task: 'Create Home Page' },
    { id: 2, task: 'Make a chat backend' },
    { id: 3, task: 'Notification with firebase' },
  ];
  return (
    <View>
      <Appbar.Header
        statusBarHeight={20}
        style={{ backgroundColor: '#7D5BA6' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <ScrollView style={styles.container}>
        <View style={styles.headerStyle}>
          <Avatar.Image
            source={require('../assets/img/dp.jpg')}
            size={100}
            style={styles.avatar}
            backgroundColor="#111"
          />
          <View style={styles.headerText}>
            <Title>{member.name}</Title>
            <Caption>{member.pos}</Caption>
          </View>
          <View style={styles.socialIcons}>
            {socialIcons.map(social => (
              <Foundation
                name={social.iconName}
                key={social.name}
                size={30}
                color={social.color}
              />
            ))}
          </View>
        </View>

        <Paragraph style={styles.bio}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Paragraph>

        <Text style={styles.joinedText}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={18}
            color="black"
          />
          {'  '}
          Joined May 2017
        </Text>
        <Divider style={styles.divider} />

        <Card
          header="Phone Number"
          details="8217454919"
          actions={phoneActions}
        />

        <Card
          header="Email Address"
          details="2428kcr@gmail.com"
          actions={emailActions}
        />
        <Card header="Tasks" details={tasks} actions={emailActions} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  container: {
    backgroundColor: '#f6f8fa',
  },
  headerStyle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 120,
  },
  headerText: {
    justifyContent: 'center',
  },
  avatar: {
    margin: 15,
  },
  socialIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 8,
  },
  bio: {
    backgroundColor: '#fff',
    padding: 20,
    // paddingBottom: 10,
    fontSize: 18,
  },
  divider: {
    marginTop: 8,
  },
  shortDivider: {
    width: '95%',
    backgroundColor: 'rgb(255, 45, 85)',
    alignSelf: 'center',
  },
  joinedText: {
    backgroundColor: '#fff',
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10,
  },
});
