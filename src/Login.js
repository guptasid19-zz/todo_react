import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthenticationHandler from './services/authenticationHandler';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    async handleClick(event){
        event.preventDefault();
        const {email, password} = this.state;
        try{
            console.log(email)
            const response = await AuthenticationHandler.signIn(email, password);
            console.log(response.data);
            this.props.loginUser(response.data.auth_token);
        } catch(e){
            console.log(e.response);
            alert(e.response.data.error.user_authentication);
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                <div>
                <AppBar
                    title="Login"
                />
                <TextField
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    type="email"
                    onChange = {(event,newValue) => this.setState({email:newValue})}
                    />
                <br/>
                    <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
 margin: 15,
};

export default Login;