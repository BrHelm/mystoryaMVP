/* import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Splash extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShowSearch = this.handleShowSearch.bind(this);
    this.handleCloseSearch = this.handleCloseSearch.bind(this);

    this.state = { showSearch: false, email: "", password: "", errors: {} };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  handleCloseSearch() {
    this.setState({ showSearch: false });
  }

  handleShowSearch() {
    this.setState({ showSearch: true });
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

    return (
      <div className="container-fluid">
        <div>
          <Modal show={this.state.showSearch} onHide={this.handleCloseSearch}>
            <Modal.Header closeButton>
              <Modal.Title className='font3'>Log in with email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container-fluid'> <div className='row' style={{ margin: '1%' }}>
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
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div></div>
            </Modal.Body>
            <Modal.Footer>
              <Button className='modalCloseBtn' onClick={this.handleCloseSearch}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="row jumbophoto">

          <div className='splashRowA'>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

              <div id="row10e" className="row " style={{ marginTop: '24%' }}>
                <div className='logoSplashText font0 centerContents'><span style={{ fontWeight: '900' }}>My</span>storya</div>
                <img alt="" className="img-responsive imgLogoText" src={require("../../img/logoTextBlue.png")} />
              </div>

              <div id="row10e" className="row" style={{ marginTop: '15%' }}>
                <div className='logoSplashText font9'>
                  <div className='row'>One World,</div>
                  <div className='row'>Many Stories.</div>
                  <div className='row'>Share Yours.</div>
                </div>
              </div>

              <div id="row10b" className="row" style={{ marginBottom: '1%', marginLeft: '20%', marginTop: '10%' }}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <a className="loginbtn" href="/profile"><button className="loginBtn loginBtn--facebook"><a href='/profile' className='loginbtn'>Login with Facebook</a></button></a>
                </div>
              </div>

              <div id="row10c" className="row" style={{ marginBottom: '1%', marginLeft: '20%' }}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <a className="loginbtn" href="/profile"><button className="loginBtn loginBtn--google"><a href='/profile' className='loginbtn'>Login with Google</a></button></a>
                </div>
              </div>

              <div id="row10a" className="row" style={{ marginBottom: '1%', marginLeft: '20%' }}>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <button onClick={this.handleShowSearch} className="loginBtn loginBtn--custom"><a className="loginbtn" onClick={this.handleShowSearch}>Login with email</a></button>
                </div>
              </div>

             

            </div></div>

          <div className="col-xs-1 col-sm-2 col-md-8 col-lg-8"></div> 

        </div>
      </div>);
  }
};

Login.propTypes = {
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
)(Login);

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
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

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login); */