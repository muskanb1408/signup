
import React, {Component} from "react";
import '../App.css';
import  { Link, Route, Router} from "react-router-dom";

class SignUpForm extends Component{
render(){
    return(
        <div className="FormCenter">
  <form className="FormFields" onSubmit={this.handleSubmit}>
    <div className="FormField">
      <label className="FormField__Label" htmlFor="name">Full Name</label>
      <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />    </div>

      <div className="FormField">
      <label className="FormField__Label" htmlFor="Password">Password</label>
      <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" name="password" />    </div>
  
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="email">Email-ID</label>
      <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email-ID" name="email" />    </div>
  <div className="formField">
  <label className="formField__CheckboxLabel">
    <input className="formField__Checkbox" type="checkbox" name="hasAgreed" />
  I agree all statements in  <a href="" className="FormField__TermsLink">terms of services</a>
  </label>
  </div>
  <div className="FormField">
    <button className="formField__Button mr-20">Sign Up</button><Link to="/sign-in"
    className="FormField__Link">I'm already member</Link>
  </div>
  
  </form>
</div>

    );
}
}

export default SignUpForm;