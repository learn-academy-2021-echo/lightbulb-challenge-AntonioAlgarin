import React, { Component } from 'react'

/*
create a class for the light box
set states need to include background color and text color
need to include a button and onClick action
need to set a few states to toggle light
create a method that changes the text and background in the box
the text will go from "off" to "on" to match current status of light
the background also needs to change from white to yellow
*/

 class Light extends Component {
     constructor(props){
       super(props)
       this.state = {
         //"light" will be used to designate what text gets displayed
         light: "Off",
        //"colorBox" is the background
         colorBox: "White"
        }
     }
     lightToggle = () => {
         //"lightToggle" will change the text displayed to "on"
         //the background color should also change to yellow
         //create conditional statement to toggle state
         if (this.state.light === "On") {
             this.setState({light: "Off", colorBox: "White"})
            } else {
                this.setState({light: "On", colorBox: "Yellow"})
            }
        }
        render() {
            return (
                <>
                <button
                id = "ToggleSwitch" onClick = {this.lightToggle} style = {{color: "black", height: 88, width: 88, margin: 25, background: this.state.colorBox}} >
                {this.state.light}
                </button>
            </>
          )
        }
      }
export default Light
