import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import Login from '../auth/Login';

class Landing extends Component {
  constructor() {
    super();

    this.state = { email: "", password: "", errors: {} };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() { //go the dashboard if logged in
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return <div className="container-fluid">

        <div className="row jumbophoto landing">
          <div className="splashRowA">
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            
              <div id="row10e" className="row">
              <div className="col-md-4">
                <div className="logoSplashText font0 center-text">
                  <span style={{ fontWeight: "900" }}>My</span>storya
                </div>
                {/* <img alt="" className="img-responsive imgLogoText" src={require("../../img/logoTextBlue.png")} /> */}
              </div>
              </div>

              <div id="row10f" className="row">
                <div className='container'>
                <div className="row font9 center-text"><div className="col-md-4">One World,</div></div>
                <div className="row font9 center-text"><div className="col-md-4">Many Stories.</div></div>
                <div className="row font9 center-text"><div className="col-md-4">Share Yours.</div></div>
                </div>
              </div>

              <div id="row10d" className="row">
              <div className="col-md-4">
                  <Link to="/register">
                  <button className="btn btn-info btn-block loginSubmitBtn">
                        Sign Up
                    </button>
                  </Link>
                </div>
              </div>

              <div id="row10a" className="row">
              
                    <div className="col-md-4">
                      
                      <p className="lead text-center" style={{marginTop: '10%', color:'rgb(240,240,240)'}}>
                        Sign in to your Mystorya account
              </p>
                      <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                          placeholder="Email Address"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                        />

                        <TextFieldGroup
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />
                        <input type="submit" className="btn btn-info btn-block loginSubmitBtn" />
                      </form>
                    </div>
                  
                {/* <button onClick={this.handleShowSearch} className="loginBtn loginBtn--custom">
                  <span className="loginbtn" onClick={this.handleShowSearch}>
                    Login with email
                    </span>
                </button> */}

              </div>
            </div>
          </div>

          
        </div>
      </div>;
  }
};

Landing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);

/* class Landing extends Component {
  componentDidMount() { 
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Mystorya</h1>
                <p className="lead">
                  {' '}
                  Create a profile, share stories and connect
                  with people around the world.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
 */