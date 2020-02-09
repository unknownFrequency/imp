import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Button from './src/components/Button';
import globals from './src/lib/globals';

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
              </View>
            </View>
          </View>

          <View style={styles.longterm_todos}>
            <Text>Longterm Goals</Text>
          </View>

          <View style={styles.social}>
            <Button
                buttonType={globals.BUTTON_TYPE.confirmation}
                onButtonPress={console.log('Button Pressed OK?')}
                buttonTitle={globals.BUTTON_TITLE.confirmation}
                buttonSize={{width: '45%', height: '45%'}}
                customButtonStyle={{marginTop: 10, borderRadius: 50}}
            />
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
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
    width: '100%',
    borderWidth: 2,
  },
  todays_bad: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    width: '75%',
    borderWidth: 2,
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
