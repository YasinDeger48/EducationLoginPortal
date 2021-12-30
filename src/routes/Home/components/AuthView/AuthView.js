import React, {Component} from "react";
import LoginView from "./LoginView";
import PasswordReset from "./PasswordReset";
import SignUpView from "./SignUpView";



class AuthView extends Component {


    constructor(){
        super();

        //1:login
        //2:register
        //3:reset

        this.state = {
            currentView :1
        }
    }

    changeView(newView){
        console.log('çalıştı', newView)
        this.setState({
        currentView : newView
        })
   }
   

    render(){


        return this.state.currentView === 1 
        ? <LoginView onViewChange = {this.changeView.bind(this)} />
        : this.state.currentView === 2
        ? <SignUpView onViewChange = {this.changeView.bind(this)} />
        : <PasswordReset onViewChange = {this.changeView.bind(this)}/>;

       

    }


}

export default AuthView;