
import React from 'react';
import { Route,Link, Switch} from 'react-router-dom';
import Blue from './component.js/blue';
import Red from './component.js/red';
import Green from './component.js/green';
import Purple from './component.js/purple';
import './App.css';
import NotFound from './component.js/notfound';
import {Component} from 'react';

class Change extends Component{
  constructor(props){
      super(props);
      this.state = {
          input : '',
          submit: ''
      }
      this.handleChange= this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
      this.setState({
          input: event.target.value
      })
  }
  handleSubmit(event){
      event.preventDefault();
      this.setState({
          submit:this.state.input
      })
  }
  render(){
      return (
          <div>
              <form onSubmit= {this.handleSubmit}>
              <input type = "color" value = {this.state.input} onChange={this.handleChange}/>
              <button type = 'submit'>Add Color</button>
              </form>
              <h4>Please select a color</h4>
      <ul>
      <li style = {{listStyleType:"none"}}>
      <Link to='/newcolor' style = {{textDecoration:"none"}}>{this.state.input}</Link>
        </li>
        <li style = {{listStyleType:"none"}}>
          <Link to='/blue' style = {{textDecoration:"none"}}>Blue</Link>
        </li>
        <li style = {{listStyleType:"none"}}>
          <Link to = '/red' style = {{textDecoration:"none"}}>Red</Link>
        </li>
        <li style = {{listStyleType:"none"}}>
          <Link to = '/green' style = {{textDecoration:"none"}}>Green</Link>
        </li>
        <li style = {{listStyleType:"none"}}>
          <Link to = '/purple' style = {{textDecoration:"none"}}>Purple</Link>
        </li>
        </ul>
          </div>
      )
  }
}




class App extends Component{
        render(){
        return (
        <div className="App">
          <div className= "header">
          <h3>Welcome to the color factory.</h3>
          <ul>
            <li style= {{listStyleType:"none"}}>
              <Link to="/colors" style = {{textDecoration:"none", color:"white"}} 
              > <strong>Add a color</strong> 
              </Link>
            </li>
            </ul>
          </div>
          <Switch>
          <Route path= "/colors"component={Change} exact/>
          <Route path="/newcolor" component={Change}/>
          <Route path="/blue" component = {Blue}/>
          <Route path = "/red" component = {Red}/>
          <Route path = "/green" component = {Green}/>
          <Route path = "/purple" component = {Purple}/>
          <Route path = "/back" component= {Change}/>
          <Route component = {NotFound}/>
          </Switch>
        </div>
        )
      }
    }
  


export default App;
