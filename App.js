import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WelcomeMessage: "Welcome To Improve Me"
    }
  }

render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome_message}>
            &#9734;&#9734;&#9734;&#9734;&#9734;&nbsp;&nbsp;
              {this.state.WelcomeMessage}
            &nbsp;&nbsp;&#9734;&#9734;&#9734;&#9734;&#9734;
          </Text>
        </View>

        <View style={styles.todays_todos}>
          <Text>Todays Todo's</Text>

          <Text>* Mood Chart :)</Text>
          <Text>* Diary</Text>
          <View style={styles.todays_actions}>
            <View style={styles.todays_good}>
              <TouchableOpacity>
                <Text>What I did good button > </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.todays_bad}>
              <TouchableOpacity>
                <Text>What I did bad &nbsp; button  > </Text>
              </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: .3,  
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  welcome_message: {
    color: '#fff',
    fontSize: 20
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
