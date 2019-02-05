import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header'
import Questions from './components/Questions'
import Response from './components/Response'
import ResponseEdit from './components/ResponseEdit'
import ResponseDelete from './components/ResponseDelete'
import PreviousButton from './components/PreviousButton'
import NextButton from './components/NextButton'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      currentIndex: 1
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3002')
    const json = await response.json()
    this.setState({ questions: json })
    this.nextQuestion()
  }
  //ternary for card vs loading bc loading delay for backend

  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  nextQuestion = (condition) => {
    console.log('next question clicked')
    let tempIndex = this.state.currentIndex
    if (condition) {
      if (tempIndex === this.state.questions.length - 1) {
        tempIndex = 0
      } else {
        tempIndex++
      }
    }
    if (!condition) {
      if (tempIndex === 0) {
        tempIndex = this.state.questions.length - 1
      } else {
        tempIndex--
      }
    }
    this.setState({
      currentIndex: tempIndex,
      question: this.state.questions[tempIndex].question,
      number: this.state.questions[tempIndex].num
    })
  }

  render() {
    return (

      <div className="container justify-content-center">
        <BrowserRouter>
          <div>
            <Header />
            <div className="justify-content-center">
              <Route path="/" exact render={() => <Questions
                number={this.state.number}
                question={this.state.question} />} />
              <Route path="/response/new" exact component={Response} />
              <Route path="/response/edit" exact component={ResponseEdit} />
              <Route path="/response/delete" exact component={ResponseDelete} />
              <div className="row justify-content-center">
                <PreviousButton
                  nextQuestion={this.nextQuestion} />
                <NextButton
                  nextQuestion={this.nextQuestion} />
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
