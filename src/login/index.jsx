import React from 'react';
import './index.less';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login-page">
        <div className='form-login'>
          <h2 className="form-login-heading">sign in now</h2>
          <div className="login-wrap">
            <input type="text" className="form-control" placeholder="User ID" />
            <input type="password" className="form-control" placeholder="Password" />
            <label className="checkbox">
              <input type="checkbox" value="remember-me" /> Remember me
              <span className="pull-right">
              <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
              </span>
            </label>
            <button className="btn btn-theme btn-block" href="index.html" type="submit"><i className="fa fa-lock"></i> SIGN IN</button>
          </div>
        </div>
      </div>
    );
  }
}