import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default function App(props) {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', id: '1'},
    { text: 'Create ImproveMe App', id: '2'},
    { text: 'Chop Chop', id: '3'}
  ]);

  const {
    WelcomeMessage
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{WelcomeMessage}</Text>
      </View>

      <View style={styles.todays_todos}>
        <Text>Todays Todo's</Text>

        <Text>* Mood Chart :)</Text>
        <Text>* Diary</Text>
        <View style={styles.todays_actions}>
          <View style={styles.todays_good}>
            <Text>What I did good :) </Text>
          </View>
          <View style={styles.todays_bad}>
            <Text>What I did bad &nbsp; :( </Text>
          </View>
        </View>
      </View>

      <View style={styles.longterm_todos}>
        <Text>Longterm Goals</Text>
      </View>

      <View style={styles.social}>
        <Text>Social</Text>
      </View>
    </View>
  );
}

App.defaultProps = {
  WelcomeMessage: 'I Will Improve!'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: .3,  
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todays_todos: {
    flex: 1,  
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todays_good: {
    backgroundColor: 'green',
  },
  todays_bad: {
    backgroundColor: 'lightblue',
  },
  longterm_todos: {
    flex: 1,  
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social: {
    flex: 1,  
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
