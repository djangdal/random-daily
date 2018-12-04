import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const food = ['cycla', 'spring', 'hoppa'];
    const health = ["Drink 4 L of water",
                    "No sugar",
                    "No alcohol",
                    "No fried food",
                    "No carbs",
                    "No Soda",
                    "No meat",
                    "Make a green smoothy",
                    "Order a healthier dish at a restaurant",
                    "Try a new veggie"]
    const physical = ["Go for a morning walk",
                      "Go for an evening walk",
                      "Go for a night walk",
                      "Go for a walk by yourself",
                      "Do 30 minutes of yoga",
                      "Do a workout consisting of: 6 rounds with 10 burpees 10 push-ups 10 sit-ups ",
                      "Do 20 burpees",
                      "10 minute of hand stand practice",
                      "Run 3 kilometers",
                      "Do 3 rounds of 20 push ups",
                      "Do 60 minutes of yoga",
                      "Do hot yoga",
                      "Walk 4km",
                      "Go for a bike ride",
                      "Take stairs when possible",
                      "Learn a new exercise"]
    const random = ["go and get a message",
                    "watch a ted talk",
                    "write someone an email/message appreciating the friendship you have",
                    "compliment a stranger",
                    "avoid saying negatives",
                    "start reading a book",
                    "write down 10 good things about your day",
                    "write down 10 people you look up to",
                    "write down 10 things you love about yourself",
                    "don’t give petty excuses",
                    "to get away with something bad",
                    "avoid unnecessary screen time",
                    "write a letter to your future self",
                    "Wake up early tomorrow (before 8am)",
                    "Smile to more strangers",
                    "Let your parents know you appreciate them",
                    "Take 20 photos"]
    return (
      <div className="App">
        <RandomSection source={health} type="Health"/>
        <RandomSection source={physical} type="Physical"/>
        <RandomSection source={random} type="Random"/>
      </div>
    );
  }
}

class RandomSection extends React.Component {
  render() {
    const source = this.props.source;
    const rand = Math.random() * source.length;
    const index = Math.floor(rand);
    return (
      <div> 
        <h2>For the daily {this.props.type}, you should</h2>
        <p>{source[index]}</p>
      </div>
    )
  }
}

export default App;
