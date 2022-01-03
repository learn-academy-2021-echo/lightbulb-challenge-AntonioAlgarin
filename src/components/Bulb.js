import React, { Component } from 'react'

class Bulb extends Component{
  render(){
    return (
      <div id="bulb">
        <img
          src={this.props.lightToggle}
          alt="lightbulb"
          style={{ height: "100px" }}
        />
      </div>
    )
  }
}
export default Bulb
