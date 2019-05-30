import React from 'react';
import {Component} from 'react';
import { directive } from '@babel/types';


class InputText extends Component{

    constructor(props){

        super(props);
    }

    render(){
        return(<><input type = "text" placeholder= {this.props.placeholder} name={this.props.name} required ={this.props.required} onChange = {this.props.handleChange}/>
       {this.props.errors.map((error) => {
           return (<><br/> <small >{error}</small></>);
       })} </>)
    }
}



export default InputText;