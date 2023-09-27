import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class OtpPage extends Component {
  render() {
    return (
      <div className="otp-page-container">
        <img
          className="tick-image"
          src="https://i.ibb.co/tDrhpDn/tick-2.webp"
          alt="mobile-tick"
        />
        <p className="verify-number-text">Please verify Mobile Number</p>
        <p className="otp-send-to-text">
          An OTP send to <span className="number-text">+918978972300</span>
        </p>
        <p className="change-phone-number-text">Change Phone Number</p>
        <ul className="input-elements-container">
          <li className="list-item">
            <input type="text" className="input-ele" />
          </li>
          <li className="list-item">
            <input type="text" className="input-ele" />
          </li>
          <li className="list-item">
            <input type="text" className="input-ele" />
          </li>
          <li className="list-item">
            <input type="text" className="input-ele" />
          </li>
        </ul>
        <p className="did-not-receive-code-text">
          Did not receive the code?{' '}
          <span className="resend-text">
            <button type="button" className="resend-button">
              Resend
            </button>
          </span>
        </p>
        <Link to="/success" className="verify-link-button">
          <button type="button" className="verify-button">
            Verify
          </button>
        </Link>
      </div>
    )
  }
}

export default OtpPage
