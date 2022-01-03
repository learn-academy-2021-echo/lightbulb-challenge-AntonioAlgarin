import React, { Component } from "react"
import Light from './Light.js'

class AddLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightBulbArray: [],
    }
  }

  addBulb = () => {
    if (this.state.lightBulbArray) {
      this.setState({ lightBulbArray: [...this.state.lightBulbArray, <Light />] });
    }
  }

  removeBulb = () => {
    if (this.state.lightBulbArray[0] !== false) {
      let newArray = [...this.state.lightBulbArray]
      newArray.pop();
      this.setState({ lightBulbArray: newArray })
    }
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.addBulb}>Add Another Bulb</button>
          <button onClick={this.removeBulb}>Remove a Bulb</button>
          <div>{this.state.lightBulbArray}</div>
        </div>
      </>
    )
  }
}
export default AddLight
