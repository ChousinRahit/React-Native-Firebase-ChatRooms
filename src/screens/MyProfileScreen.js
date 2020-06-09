import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar,
  List,
  Divider,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Headline,
  ProgressBar,
  Card,
  Button,
  IconButton,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const LeftContent = props => (
  <Avatar.Icon
    {...props}
    icon="progress-check"
    style={{ margin: 20, backgroundColor: '#7D5BA6' }}
    size={42}
  />
);

const MyProfileScreen = () => {
  return (
    <ScrollView>
      <Appbar.Header
        statusBarHeight={20}
        style={{ backgroundColor: '#7D5BA6' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Tasks " />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <View>
        <View style={styles.tasksHeader}>
          <Headline style={styles.headline}>Tasks</Headline>
          <View style={styles.filterIcons}>
            <IconButton icon="filter-variant" size={32} />
            <IconButton icon="sort" size={32} />
          </View>
        </View>
        <Card>
          <Card.Title
            title={
              <Title
                style={{ textDecorationLine: 'line-through', color: '#555' }}>
                1. Copmlete My Profile screen
              </Title>
            }
            subtitle="Take some ideas provided"
            right={LeftContent}

            // left={LeftContent}
          />
          <Card.Content>
            <List.Accordion title="Insights">
              <List.Item title="Check some design patters" />
            </List.Accordion>
          </Card.Content>
          <Card.Actions style={{ position: 'relative', height: 50 }}>
            {false ? (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#7D5BA6',
                  left: 200,
                }}
                onPress={() => {}}>
                Mark as In Progress
              </Button>
            ) : (
              <Button
                mode="contained"
                style={{ backgroundColor: '#7D5BA6', left: 200 }}>
                Mark as Copmlete
              </Button>
            )}
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title
            title={
              <Title
                style={{ textDecorationLine: 'line-through', color: '#555' }}>
                1. Copmlete My Profile screen
              </Title>
            }
            subtitle="Take some ideas provided"
            right={LeftContent}

            // left={LeftContent}
          />
          <Card.Content>
            <List.Accordion title="Insights">
              <List.Item title="Check some design patters" />
            </List.Accordion>
          </Card.Content>
          <Card.Actions style={{ position: 'relative', height: 50 }}>
            {false ? (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#7D5BA6',
                  left: 200,
                }}
                onPress={() => {}}>
                Mark as In Progress
              </Button>
            ) : (
              <Button
                mode="contained"
                style={{ backgroundColor: '#7D5BA6', left: 200 }}>
                Mark as Copmlete
              </Button>
            )}
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title
            title={
              <Title
                style={{ textDecorationLine: 'line-through', color: '#555' }}>
                1. Copmlete My Profile screen
              </Title>
            }
            subtitle="Take some ideas provided"
            right={LeftContent}

            // left={LeftContent}
          />
          <Card.Content>
            <List.Accordion title="Insights">
              <List.Item title="Check some design patters" />
            </List.Accordion>
          </Card.Content>
          <Card.Actions style={{ position: 'relative', height: 50 }}>
            {false ? (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#7D5BA6',
                  left: 200,
                }}
                onPress={() => {}}>
                Mark as In Progress
              </Button>
            ) : (
              <Button
                mode="contained"
                style={{ backgroundColor: '#7D5BA6', left: 200 }}>
                Mark as Copmlete
              </Button>
            )}
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title
            title={
              <Title
                style={{ textDecorationLine: 'line-through', color: '#555' }}>
                1. Copmlete My Profile screen
              </Title>
            }
            subtitle="Take some ideas provided"
            right={LeftContent}

            // left={LeftContent}
          />
          <Card.Content>
            <List.Accordion title="Insights">
              <List.Item title="Check some design patters" />
            </List.Accordion>
          </Card.Content>
          <Card.Actions style={{ position: 'relative', height: 50 }}>
            {false ? (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#7D5BA6',
                  left: 200,
                }}
                onPress={() => {}}>
                Mark as In Progress
              </Button>
            ) : (
              <Button
                mode="contained"
                style={{ backgroundColor: '#7D5BA6', left: 200 }}>
                Mark as Copmlete
              </Button>
            )}
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title
            title={
              <Title
                style={{ textDecorationLine: 'line-through', color: '#555' }}>
                1. Copmlete My Profile screen
              </Title>
            }
            subtitle="Take some ideas provided"
            right={LeftContent}

            // left={LeftContent}
          />
          <Card.Content>
            <List.Accordion title="Insights">
              <List.Item title="Check some design patters" />
            </List.Accordion>
          </Card.Content>
          <Card.Actions style={{ position: 'relative', height: 50 }}>
            {false ? (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#7D5BA6',
                  left: 200,
                }}
                onPress={() => {}}>
                Mark as In Progress
              </Button>
            ) : (
              <Button
                mode="contained"
                style={{ backgroundColor: '#7D5BA6', left: 200 }}>
                Mark as Copmlete
              </Button>
            )}
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  headline: {
    padding: 10,
  },
  tasksHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  filterIcons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
