import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class SignInPage extends Component {
  render() {
    return (
      <div className="sign-in-page-container">
        <h1 className="company-title">
          <span className="company-title-special">Admit</span>Kard
        </h1>
        <p className="welcome-back-text">Welcome Back</p>
        <p className="sign-in-text">Please sign in to your account</p>
        <div className="label-input-container">
          <label htmlFor="mobile-text" className="label-text">
            Enter Mobile Number
          </label>
          <div>
            <input
              className="input-element"
              id="mobile-text"
              type="text"
              placeholder="Mobile Number"
            />
          </div>
        </div>

        <p className="sms-message-text">
          We will send you a one time SMS message.
        </p>
        <p className="charges-may-apply-text">Charges may apply.</p>
        <Link to="/otp" className="link-sign-in-button">
          <button type="button" className="sign-in-button">
            Sign in with OTP
          </button>
        </Link>
      </div>
    )
  }
}

export default SignInPage
