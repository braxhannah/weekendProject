import React, { Component } from 'react'
import './App.css'
import Albums from './Albums'

// import Home from './Home'
// import Page from './Page'

class App extends Component {
  render () {
    return (
    <div>
      <h1>Header</h1>
      <Albums/>
      <h1>Footer</h1>
    </div>
    )
  }
}

//   constructor () {
//     super()
//     this.state = {
//       currentScreen: 'home' // object current screen has a value of home. The currenScreen is also called a key//
//     }
//   }
//
// navigateToPage=(scr) => {
//   this.setState({currentScreen: scr}) //pull the current sreen and set the value of scr to home
//   //so what ever you get back in the argument you set the current screen to equal that argument/src instead of 'home'//
// }
//
//   render () {
//     let screen // we want to define what screen is //
//     switch (this.state.currentScreen) {  // want this to be responsive to the current state. if current screen changes we want to update it
//       case 'home': screen = <Home naviage={this.navigateToPage}/> // WE are telling Home has a property of navigate. if this case is home then we want screen to equal home //case is part of the switch statement. This is like an if else statement
//         break
//       case 'page': screen = <Page/>
//         break
//       default: screen = <Home/> // this is if nothing is true
//     }
//     return <div className = 'App'>
//       {screen}
//     </div>
//       }
    // }

export default App
