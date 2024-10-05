import React, { useState } from 'react';
import './Auth.css';
import mainn from './../../img/Gym Center (1)_pages-to-jpg-0001.jpg';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../Api/AuthRequest';
import { logInAction } from '../../actions/AuthAction';

function Auth() {
  const [isLogIn, setIsLogIn] = useState(true); // <--- Changed to setIsLogIn for consistency

  return (
    <div className="auth">
      <div className="logo-main">
        <img src={mainn} alt="" className="app-logo" />
      </div>
      <div className="pagee">
        {isLogIn ? <LogIn setIsLogIn={setIsLogIn} /> : <SignUp setIsLogIn={setIsLogIn} />} 
      </div>
    </div>
  );
}

function SignUp({ setIsLogIn }) { // <--- Changed to setIsLogIn for consistency
 const dispatch = useDispatch()
 
  const [data, setData] = useState({ firstname: "", lastname: "", password: "", username: "", confirmpassword: "" });
  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      dispatch(signUpAction(data))
    
    } else {
      setConfirmPassword(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p   style={{color:"white"}} className="message-signup">Signup now and get full access to our app.</p>
      <div className="second-input-area">
        <div className="input-area">
          <label>
            <input required placeholder="Firstname" name="firstname" type="text" className="input-signup" onChange={handleChange} />
          </label>
          <label>
            <input required placeholder="Lastname" name="lastname" type="text" className="input-signup" onChange={handleChange} />
          </label>
        </div>
        <label>
          <input required placeholder="Email" name="username" type="email" className="input-signup" onChange={handleChange} />
        </label>
        <label>
          <input required placeholder="Password" name="password" type="password" className="input-signup" onChange={handleChange} />
        </label>
        <label>
          <input required placeholder="Confirm Password" name="confirmpassword" type="password" className="input-signup" onChange={handleChange} />
        </label>
        <div>
          <span style={{ display: confirmPassword ? "none" : "block", color: "orange" }}>
            *Passwords do not match!
          </span>
        </div>
        <button className="submit" type="submit">Submit</button>
      </div>
      <p className="signin"></p>
        <a onClick={() => setIsLogIn(true)} style={{color:"white", marginTop:"-20px",marginBottom:"10px"}}> Already have an account? LogIn!</a> 
    </form>
  );
}

function LogIn({ setIsLogIn }) { 
const dispatch = useDispatch()
  const [data, setData] = useState({ username: "", password: "" }); // <--- Added state for data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // <--- Added handleChange function
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  dispatch(logInAction(data))
  };

  return (
    <div  id="form-ui"  className='login-page'>
      <form action="" method="post" id="form" onSubmit={handleSubmit}>
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">FITCONNECT</div>
            <div id="welcome-line-2">Welcome Back!</div>
          </div>
          <div id="input-area">
            <div className="form-inp">
              <input placeholder="Email Address" type="text" name="username" onChange={handleChange} />
            </div>
            <div className="form-inp">
              <input placeholder="Password" type="password" name="password" onChange={handleChange} />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Login</button>
          </div>
          <div id="forgot-pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="end-info">
            <a onClick={() => setIsLogIn(false)}>Don't have an account? Join for free and connect with others!</a> 
          </div>
          <div id="bar" />
        </div>
      </form>
    </div>
  );
}

export default Auth;
