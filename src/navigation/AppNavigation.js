import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TimeLineScreen from '../screens/TimeLineScreen';
import CreateContact from '../screens/CreateContactScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {color} from 'react-native-reanimated';

const MembersNavigation = createStackNavigator();

const HomeNavigation = createBottomTabNavigator();

const MembersNavigator = () => (
  <MembersNavigation.Navigator headerMode="none" gestureDirection="horizontal">
    <MembersNavigation.Screen name="Home" component={HomeScreen} />
    <MembersNavigation.Screen name="Create" component={CreateContact} />
    <MembersNavigation.Screen name="Profile" component={ProfileScreen} />
  </MembersNavigation.Navigator>
);
const HomeNavigator = () => (
  <HomeNavigation.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'TimeLine') {
          iconName = 'home-outline';
        } else if (route.name === 'Member') {
          iconName = 'account-group-outline';
        } else if (route.name === 'Chat') {
          iconName = 'chat';
        } else if (route.name === 'Profile') {  
          iconName = 'account';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={30} color={color} />
        );
      },
    })}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#7D5BA6',
    }}>
    <HomeNavigation.Screen name="TimeLine" component={TimeLineScreen} />
    <HomeNavigation.Screen name="Member" component={MembersNavigator} />
    <HomeNavigation.Screen name="Chat" component={ChatScreen} />
    <HomeNavigation.Screen name="Profile" component={MyProfileScreen} />
  </HomeNavigation.Navigator>
);

export default () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
