import React, {Component} from 'react';

//styles
import './App.scss';
import * as firebase from "firebase";



class App extends Component {
  componentWillMount(){
    var config = {
        apiKey: "AIzaSyC9MfGrBdw620QroBi3c8ZPvvhqiO4HPF0",
        authDomain: "users-e767e.firebaseapp.com",
        databaseURL: "https://users-e767e.firebaseio.com",
        storageBucket: "users-e767e.appspot.com",
        messagingSenderId: "113161779172"
      };
    firebase.initializeApp(config);
  }

  sendToFirebase(){
    let obj = {
      name:'santi',
      lastName:'grecco'
    }
    console.log(firebase);
    firebase.on(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button className="button" onClick={this.sendToFirebase.bind(this)}>send to firebase</button>
      </div>
    )
  }
}

export default App;
