import React from 'react';
import {Component} from 'react';
import MyForm from './MyForm';


class FormComponent extends Component{

    constructor(props){

        super(props);

        this.state = {
            fields: [
                {placeholder: "purpose of loan",
                 name: "name",
                 input_type: "drop_down",
                 required: true,
                 validators: [],
                 errors: [],
                 values: ["Home Loan" , "Business Loan" , "Working Capital" , "Personal Loan","Education Loan"]
                 },

                 {
                    placeholder: "Name",
                 name: "remaining_values",
                 input_type: "big_text",
                 validators: ["moreThanSixCharacters","capitalFirstLetter"],
                 required: true,
                 errors: [], 
                 },

                 {
                    placeholder: "Email",
                 name: "email",
                 input_type: "text_area",
                 validators: ["moreThanSixCharacters","capitalFirstLetter"],
                 required: true, 
                 errors: [],
                 },

                 {
                    placeholder: "Prefered time to call you",
                 name: "contact_time",
                 input_type: "text_area",
                 validators: ["moreThanSixCharacters","capitalFirstLetter"],
                 required: true, 
                 errors: [],
                 } ,
                 {
                    placeholder: "password",
                 name: "password",
                 input_type: "text_area",
                 validators: [],
                 required: true, 
                 errors: []
                 },

                 {placeholder: "country",
                 name: "country",
                 input_type: "drop_down",
                 validators: [],
                 required: true,
                 values: ["Lebanon" , "Egypt" , "Morocco" , "Jordan","India"],
                 errors: []
                 },




            ],

            name: "",
            remaining_values: "",
            email: "",
            contact_time: "",
            formErrors: {
                name:"",
                remaining_values:"",
                email: "",
                contact_time: "",
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        

        
    }


    checkForErrors(myObject){

        myObject.validators.forEach((validator) => {

            
            console.log("this." + validator + "(" + "\"" + eval("this.state."+myObject.name)+ "\"" +  "," + "\"" + myObject.name + "\"" +     ")");
            let x = eval("this." + validator + "(" + "\"" + eval("this.state."+myObject.name)+ "\"" +  "," +  "\""  + myObject.name + "\"" +   ")");
            console.log(x);
            
            // eval(validator + "\"(this.state." +myObject.name+"\")")
        })
    //     console.log("this."+this.state.fields[1].validators[0]+"("+this.state.remaining_values+")");
    // console.log(eval("this."+this.state.fields[1].validators[0]+"(\""+this.state.remaining_values+"\")"));
    // console.log(this.moreThanSixCharacters(this.state.password))
     
        
    }

    handleSubmit(e){
        e.preventDefault();

        this.state.fields.forEach((field)=>{
            this.checkForErrors(field);
        });

        console.log(this.state.fields);


        // console.log(this.state.email);
    }

    moreThanSixCharacters(text , myString){

        
        if(text.length<6){

           let fieldsCopy = this.state.fields;

            fieldsCopy.map((field) => {

                if(field.name == myString){
                    if(!field.errors.includes("invalid length")){
                    field.errors.push("invalid length");}
                }
            })

            
            console.log(fieldsCopy);

            this.setState({
                fields: fieldsCopy
            })
           
        }

else{
            let fieldsCopy = this.state.fields;

            fieldsCopy.map((field) => {

                if(field.name == myString){
                    if(field.errors.includes("invalid length")){
                   let x = field.errors.indexOf("invalid length");
                field.errors.splice(x,1);}
                }
            })
        }

    }



    capitalFirstLetter(text,myString){
        var i = text.charAt(0);

        if(!(i == i.toUpperCase())){

            let fieldsCopy = this.state.fields;

            fieldsCopy.map((field) => {

                if(field.name == myString){
                    if(!field.errors.includes("invalid first letter")){
                    field.errors.push("invalid first letter");}
                }
            })

            
            console.log(fieldsCopy);

            this.setState({
                fields: fieldsCopy
            })
            
        }

        else{
            let fieldsCopy = this.state.fields;

            fieldsCopy.map((field) => {

                if(field.name == myString){
                    if(field.errors.includes("invalid first letter")){
                   let x = field.errors.indexOf("invalid first letter");
                field.errors.splice(x,1);}
                }
            })
        }
    }

    render(){
        return(<form onSubmit = {(e) => this.handleSubmit(e)}>


        <MyForm fields = {this.state.fields} handleChange = {this.handleChange}></MyForm>
        <button>Submit</button>
        </form>)
    }
}

export default FormComponent;