import React, {Component} from "react";
import "../App.css";
import {Link, Router}  from "react-router-dom";



class SignInForm extends Component{
render(){
    return(
     
        <div className="FormCenter">
  <form className="FormFields" onSubmit={this.handleSubmit}>
      
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="email">Email-ID</label>
      <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email-ID" name="email" />    </div>
      <div className="FormField">
      <label className="FormField__Label" htmlFor="Password">Password</label>
      <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" name="password" />    </div>
  

  <div className="FormField">
  <button   className="formField__Button mr-20">Sign In</button><Link to ="/"
    className="FormField__Link">Create account</Link>
  </div>
  
  </form>
</div>

    );
}
}

export default SignInForm;