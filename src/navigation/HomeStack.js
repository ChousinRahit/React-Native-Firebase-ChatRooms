import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import { IconButton } from 'react-native-paper';
import Theme from '../styles/theme.style';
import RoomScreen from '../screens/RoomScreen';

const Stack = createStackNavigator();

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

const HomeStack = () => {
  return (
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name="ChatApp" component={ChatApp} />
      <ModalStack.Screen name="AddRoom" component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
};

const ChatApp = () => {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.PRIMARY_COLOR,
        },
        headerTintColor: Theme.SECONDARY_COLOR,
        headerTitleStyle: {
          fontSize: Theme.FONT_SIZE_XLARGE,
        },
        headerTitleAlign: 'center',
      }}>
      <ChatAppStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon="message-plus"
              size={28}
              color={Theme.SECONDARY_COLOR}
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />

      <ChatAppStack.Screen
        name="Room"
        component={RoomScreen}
        options={({ route }) => ({
          title: route.params.thread.name,
        })}
      />
    </ChatAppStack.Navigator>
  );
};

export default HomeStack;
