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

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(ContactsContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => console.log('Searching');

  const handleMore = () => console.log('Shown more');
  return (
    <View>
      <Appbar.Header
        statusBarHeight={20}
        style={{ backgroundColor: '#7D5BA6' }}>
        <Appbar.Content title="Team Members" />
        <Appbar.Action icon="dots-vertical" onPress={handleMore} />
      </Appbar.Header>
      <View style={styles.searchInput}>
        <TextInput
          // label="looking for?"
          style={styles.input}
          value={searchInput}
          onChangeText={setSearchInput}
          mode="outlined"
        />
        <IconButton
          icon="magnify"
          color="#fff"
          size={28}
          onPress={() => console.log('Pressed')}
          style={{ backgroundColor: '#7D5BA6' }}
        />
      </View>
      <List.Section>
        {state.map(mem => (
          <View key={mem.id}>
            <Contact
              item={mem}
              onPress={() => navigation.navigate('Profile', { itemId: mem.id })}
            />
            <Divider style={{ height: 1.5 }} />
          </View>
        ))}
      </List.Section>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginLeft: 10,
    height: 40,
  },
});
