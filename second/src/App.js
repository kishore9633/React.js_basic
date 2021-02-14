
import React,{Component} from "react"
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/Useroutput'

class App extends Component {

  state = {
    username:'shiva'
  }

  Inputchangedhandler =(event)=>{
 this.setState({username:event.target.value})


  }
render(){
  return(
    <div className='App'>
      <UserInput changed={this.Inputchangedhandler}
      currentname = {this.state.username}/>
      <UserOutput username='replaced'/>
      <UserOutput username={this.state.username}/>
      <UserOutput/>

    </div>
  )
}

}


export default App