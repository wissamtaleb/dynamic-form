import React from 'react';
import {Component} from 'react';
import DropDown from './DropDown';
import TextArea from './TextArea';
import InputText from './InputText';


class MyForm extends Component{

    constructor(props){

        super(props);
    }

    render(){
        return(<div>
            {this.props.fields.map((field) =>{
                if(field.input_type === "drop_down"){
                    return (<><DropDown  name= {field.name} placeholder = {field.placeholder} required = {field.required} values = {field.values} errors={field.errors} handleChange = {(e) => this.props.handleChange(e)}></DropDown> <br/></>)
                }

                if(field.input_type === "big_text"){
                    return (<><TextArea name= {field.name} placeholder = {field.placeholder} required = {field.required} errors={field.errors} handleChange = { (e) => this.props.handleChange(e)}></TextArea><br/></>)
                }

                if(field.input_type === "text_area"){
                    return (<><InputText name= {field.name} placeholder = {field.placeholder} required = {field.required} errors={field.errors} handleChange = {(e) => this.props.handleChange(e)}></InputText><br/></>)
                }
            })}
        </div>)
    }
}

export default MyForm;