import {Route, Switch} from 'react-router-dom'

import SignInPage from './components/SignInPage'
import OtpPage from './components/OtpPage'
import SuccessPage from './components/SuccessPage'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SignInPage} />
      <Route exact path="/otp" component={OtpPage} />
      <Route exact path="/success" component={SuccessPage} />
    </Switch>
  </div>
)

export default App
