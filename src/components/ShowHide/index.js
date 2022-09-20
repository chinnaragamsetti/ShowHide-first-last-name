// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstname: false, islastName: false}
  firstName = () => {
    this.setState(prevState=>({isFirstname: !prevState.isFirstname)
  }
  lastnName = () => {
    this.setState(prevState=>({isLastname: !prevState.isLastname)
  }

  onFirstname=()=>{
      <div className="namecontianer">
                <h1 className="h2">Joe</h1>
              </div>
  }
  onlastName=()=>{
      <div className="namecontianer">
                <h1 className="h2">Jonas</h1>
              </div>
  }


  render() {
    const {isFirstname, isLastname} = state
    return (
      <div className="bg">
        <h1 className="h">Show/Hide</h1>
        <div className="fullnamecontainer">
          <div class="firstnamecontainer">
            <button className="butt" onClick={this.firstName} type="button">
              Show/Hide Firstname
            </button>
            {isfirstName ? this.onFirstname(): null}
          </div>
          <div className="lastnamecontainer">
            <button className="butt" onClick={this.lastName} type="button">
              Show/Hide Lastname
            </button>
            {isLastname ? this.onlastName(): null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
