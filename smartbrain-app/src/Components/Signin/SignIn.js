import React from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <article className="mw6  center bg-white br3 pa3 pa4-ns mv3 ba  shadow-4 b--black-10">
<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="">
      <input 
        onClick={() => onRouteChange('home')}
        className="b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
        type="submit"
        value="Sign in"
      />
    </div>
    <div className="lh-copy mt3">
      <p onClick={() => onRouteChange('register')} className="f4 link dim black db pointer">Register</p>
    </div>
  </form>
</main>
</article >
  );
};

export default SignIn;
