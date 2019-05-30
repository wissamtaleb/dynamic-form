import React from 'react';
import {Component} from 'react';


class DropDown extends Component{

    constructor(props){

        super(props);
    }

    render(){
        return (<div>
            <label>{this.props.placeholder}</label>
            <select name={this.props.name} required ={this.props.required} onChange = {this.props.handleChange}>
               <option value = "">Select an option</option>
               {this.props.values.map((temp) => {
                   return (<option value = {temp}>{temp}</option>)
               })}
            </select>
            </div>)
        
    }
}

export default DropDown;