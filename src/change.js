import React, {Component} from 'react';

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
            </div>
        )
    }
}
export default Change;