// Write your code here
import {Component} from "react"
import './index.css'

class ShowHide extends Component {
    state={firstname:true,lastname:true}
    firstname=()=>{
        const {firstname}=this.state;
        if (this.firstname===true){
            return(
                <div className="namecontianer">
            <h1 className="h2">Joe</h1>
          </div>
            )
        }

    }
    lastname=()=>{
        const {lastname}=this.state;
        if (this.lastname===true){
            return(
                <div className="namecontianer">
            <h1 className="h2">henry</h1>
          </div>
        </div>
            )
        }

    }

  render() {
    return(
      <div className="bg">
        <h1 className="h">Show/Hide</h1>
        <div className="fullnamecontainer">
            <div class="firstnamecontainer">
                    <button className="butt" onClick={this.firstname}>Show/Hide Firstname</button>
                    {this.firstname()}
            </div>
            <div className="lastnamecontainer">
            
                     <button className="butt" onClick={this.lastname}>Show/Hide Lastname</button>
                     {this.lastname()}
            </div>
          
          
      </div>
    )
  }
}
export default ShowHide