// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isfirstname: false, lastname: false}
  firstname = () => {
    this.setState(prevState=>({isfirstname:!prevState.isfirstname)
  }
  lastname = () => {
    this.setState(prevState=>({islastname:!prevState.islastname)
  }

  render() {
    const {isfirstname, islastname} = state
    return (
      <div className="bg">
        <h1 className="h">Show/Hide</h1>
        <div className="fullnamecontainer">
          <div class="firstnamecontainer">
            <button className="butt" onClick={this.firstname} type="button">
              Show/Hide Firstname
            </button>
            {isfirstname ? (
              <div className="namecontianer">
                <h1 className="h2">Joe</h1>
              </div>
            ) : null}
          </div>
          <div className="lastnamecontainer">
            <button className="butt" onClick={this.lastname} type="button">
              Show/Hide Lastname
            </button>
            {islastname ? (
              <div className="namecontianer">
                <h1 className="h2">Jonas</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
