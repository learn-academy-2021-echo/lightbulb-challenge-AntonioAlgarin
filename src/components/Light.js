import React, { Component } from 'react'
import Bulb from './Bulb'
import bulbOff from './images/bulbOff.jpeg'
import bulbOn from './images/bulbOn.jpeg'
// import switch from './images/switch.jpeg'

// create Bulb class
// select bulbOn, bulbOff, and switch images to import
// set states need to include background color and text color
// bulb image need to change when switch is toggled

 class Light extends Component {
     constructor(props){
       super(props)
       this.state = {
         light: "Off",
         color: "White",
         lightToggle: bulbOff,
        }
     }
     switch = () => {
         //create conditional statement to toggle state
         if (this.state.light === "On") {
            this.setState({light: "Off", color: "White", lightToggle: bulbOff})
          } else {
                this.setState({light: "On", color: "Yellow", lightToggle: bulbOn})
            }
        }
        render() {
            return (
                <>
                <Bulb lightToggle={this.state.lightToggle} />
                <button
                id = "ToggleSwitch"
                onClick = {this.switch}
                style = {{height: 88, width: 88, margin: 25, background: this.state.color}} >
                {this.state.light}
                </button>
                </>
          )
        }
      }
export default Light
