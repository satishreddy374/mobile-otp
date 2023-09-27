import './index.css'

const SuccessPage = () => (
  <div className="success-page-container">
    <img
      src="https://i.ibb.co/BzdS7gq/success-image.jpg"
      alt="success"
      className="success-image"
    />
    <h1 className="welcome-to-admitkard-heading">
      Welcome to <span className="special-admitkard">AdmitKard</span>
    </h1>
    <p className="success-text">
      In order to provide you with a custom experience, <br />
      <span className="success-special-text">
        we need to ask you a few questions.
      </span>
    </p>
    <button type="button" className="get-started-button">
      Get Started
    </button>
    <p className="take-5-min-text">*This will only take 5 min.</p>
  </div>
)

export default SuccessPage
