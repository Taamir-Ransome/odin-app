import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css"

const LoginPage = () => {

  const history = useHistory()

  const toMain = () => {
    history.push('/main');
  }
  return (
    <div className="login-page">
      <div>
          <h2 className="login-title">Login</h2>
        </div>
        <div className="login-container">
          <div className="form-container">
            <form className="form-wrapper">
              <div className="user">
                <div className="inner-form">
                  <label className="user-name">Username</label>
                </div>
                <div className="inner-form">
                  <input type="text" className="user-input" />
                </div>
              </div >
              <div className="password">
                <div className="inner-form">
                  <label className="user-pw">Password</label>
                </div>
                <div className="inner-form">
                  <input type="password" className="pw-input" />
                </div>
              </div>
              <div className="form-btns">
                <button className="btn-login" onClick={toMain}>
                  Login
                </button>
                <button className="btn-reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
