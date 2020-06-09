import React, { useState, useContext, useEffect } from 'react';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import theme from '../styles/theme.style';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { IconButton } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function RoomScreen({ route }) {
  const { thread } = route.params;

  const [messages, setMessages] = useState([]);

  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();

  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);
  // helper method that is sends a message
  const handleSend = async messages => {
    const text = messages[0].text;

    console.log(text);
    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email,
        },
      });

    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        { merge: true },
      );
  };

  const renderBubble = props => {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: theme.PRIMARY_COLOR,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSystemMessage = props => (
    <SystemMessage
      {...props}
      wrapperStyle={styles.systemMessageWrapper}
      textStyle={styles.systemMessageText}
    />
  );

  const renderSend = props => (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <IconButton icon="send-circle" size={34} color={theme.PRIMARY_COLOR} />
      </View>
    </Send>
  );

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={theme.PRIMARY_COLOR} size="large" />
    </View>
  );

  const scrollToBottomComponent = () => (
    <View style={styles.bottomComponentContainer}>
      <IconButton
        icon="chevron-double-down"
        size={36}
        color={theme.PRIMARY_COLOR}
      />
    </View>
  );

  return messages.length ? (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: currentUser.uid }}
      renderBubble={renderBubble}
      renderLoading
      renderLoading={renderLoading}
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      renderSystemMessage={renderSystemMessage}
    />
  ) : (
    <ActivityIndicator
      style={styles.loadingContainer}
      size="large"
      color={theme.PRIMARY_COLOR}
    />
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.PRIMARY_COLOR,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
    paddingHorizontal: 15,
  },
  systemMessageWrapper: {
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
});
