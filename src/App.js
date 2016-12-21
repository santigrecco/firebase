import React, {Component} from 'react';

//styles
import './App.scss';
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyC9MfGrBdw620QroBi3c8ZPvvhqiO4HPF0",
  authDomain: "users-e767e.firebaseapp.com",
  databaseURL: "https://users-e767e.firebaseio.com",
  storageBucket: "users-e767e.appspot.com",
  messagingSenderId: "113161779172"
};
firebase.initializeApp(config);




class App extends Component {
  constructor(){
    super()
    this.state = {
      name:'something'
    }
  }

  componentWillMount(){
    const db = firebase.database().ref().child('object').child('name')
    db.on('value', snapshot => {
      this.setState({
        name:snapshot.val()
      })
    })

  }

  sendToFirebase(){
    const db = firebase.database().ref().child('object')
    db.on('value', snapshot => {
      console.log(snapshot.val());
      // this.setState({
      //   name:snapshot.val()
      // })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button className="button" onClick={this.sendToFirebase.bind(this)}>send to firebase</button>
      </div>
    )
  }
}

export default App;
