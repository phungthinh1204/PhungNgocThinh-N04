import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
    var Config = {
      apiKey: "AIzaSyA8h1wKWZH6joldsqrAAE3jrNVAE9fPlZc",
      authDomain: "fir-chat-ba5d8.firebaseapp.com",
      databaseURL: "https://fir-chat-ba5d8.firebaseio.com",
      projectId: "fir-chat-ba5d8",
      storageBucket: "fir-chat-ba5d8.appspot.com",
      messagingSenderId: "447299494720",
      //appId: "1:447299494720:web:e514d76d4eebffc59350a5",
      //measurementId: "G-Y8K3Y8FD92"
    };
    // Initialize Firebase
    firebase.initializeApp(Config);
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

