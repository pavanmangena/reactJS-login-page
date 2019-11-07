import React from 'react';
import './App.css';
const Welcome = ({ user, onSignOut }) => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="welcomeClass">
        Hi <strong>{user.username}</strong>
        <br /><br />
        <p className="welcomeText">Welcome to My App</p>
        <p className="welcomeText">The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login</p>
        <br /><br />
        <button className="btn"  onClick={onSignOut}>signout</button>
      </div>
      <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/>
    </div>
  )
}
class Login extends React.Component {
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  render() {
    return (
      <div className="ex">
        <form className="formClass" onSubmit={this.handleSignIn.bind(this)}>
          <br /><br /><br /><br /><br />
          <h3>Please sign in to <u className="myappClass"> My App</u></h3>
          <div className="inputClass">
            <input type="text" ref="username" placeholder="username" />
            <br /><br />
            <input type="password" ref="password" placeholder="password" />
            <br />
            <br />
            <label>Choose yur role</label>&nbsp;&nbsp;
          <select>
              <option value="user">USER</option>
              <option value="admin">ADMIN</option>
            </select>
            <br /><br />
            <button className="btn" onClick="Login">Login</button>
            <br /><br /><br />
          </div>
          <p><label><input type="checkbox" /><span>I accpet terms and condition</span></label></p>
          <p>Not a user, <a  href="#">Sign Up</a></p>
          <a className="forgetPassword" href="#">I forget my password</a>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </form>
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  signOut() {
    this.setState({ user: null })
  }
  render() {
    return (
      <div>
        <center>
          <h1 className="titleClass">My Application    </h1>
          {
            (this.state.user) ?
              <Welcome
                user={this.state.user}
                onSignOut={this.signOut.bind(this)}
              />
              :
              <Login
                onSignIn={this.signIn.bind(this)}
              />
          }
          <marquee>&copy;  All rights reserved to PAVAN KUMAR</marquee>
          <footer>
            <p>Pavan Kumar</p>
            <p>Contact information: <a href="mailto:someone@example.com">pavankumar@email..com</a></p>
          </footer>
        </center>
      </div>
    )
  }
}
export default App;
