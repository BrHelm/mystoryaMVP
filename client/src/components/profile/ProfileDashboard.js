import React, { Component } from 'react';
import { Button, Glyphicon, Modal, Popover, OverlayTrigger } from 'react-bootstrap';

class ProfileDash extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseSave = this.handleCloseSave.bind(this);
    this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this);
    this.handleChangeAboutMe = this.handleChangeAboutMe.bind(this);
    this.handleDismissFollow = this.handleDismissFollow.bind(this);
    this.handleShowFollow = this.handleShowFollow.bind(this);

    this.state = {
      show: false,
      valueDisplayName: 'Patrick Hustad',
      valueAboutMe: 'Surfer, designer, engineer, family man !',
      showFollow: true
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ valueDisplayName: 'pat_hustad' })
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleCloseSave() {
    this.setState({ show: false });
    //save to DB
  }
  getValidationStateBody() {
    const length = this.state.valueDisplayName.length;
    if (length > 3) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'error';
    else if (length < 10) return 'error';
    return null;
  }
  handleChangeDisplayName(e) {
    this.setState({ valueDisplayName: e.target.value });
  }
  handleChangeAboutMe(e) {
    this.setState({ valueAboutMe: e.target.value });
  }
  handleDismissFollow() {
    this.setState({ showFollow: false });
  }
  handleShowFollow() {
    this.setState({ showFollow: true });
  }
  renderFollow() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="Hide / Show Followers">
        If you hide your followers, no one will be able to see how many followers you have or who you're following.
            </Popover>
    );

    if (this.state.showFollow) {
      return (
        <div className="container-fluid">
          <div className="row socialBtnRow" style={{ backgroundColor: "rgb(75,75,75)" }}>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">
                1,111 Following{" "}
              </button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">
                2,222 followers
                </button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">
                3,333 stories
                </button>
            </div>
          </div>
          <div>
            <OverlayTrigger
              trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
              <Button className='hideFollowBtn' onClick={this.handleDismissFollow}> hide </Button>
            </OverlayTrigger>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row socialBtnRow" style={{ backgroundColor: "rgb(75,75,75)" }}>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
            
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
            
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
            
          </div>
        </div>
        <div>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="bottom"
            overlay={popoverHoverFocus}>
            <Button onClick={this.handleShowFollow} className='hideFollowBtn'> show </Button>
          </OverlayTrigger>
        </div></div>
    );

  }
  render() {

    return (
      <div className='container-fluid'>

        <Modal bsSize='md' show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='font3'>Profile: Pat Hustad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid'> <div className='row' style={{ margin: '1%' }}>
              <form onSubmit={this.handleSubmit}>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <label>
                    <p className='font7'>Display Name:</p>
                    <textarea type="textarea" rows={1} cols={64}
                      value={this.state.valueDisplayName}
                      placeholder={this.state.valueDisplayName}
                      onChange={this.handleChangeDisplayName} />
                  </label>
                </div></div>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                  <p className='font7'>About me:</p>
                  <textarea type="textarea" rows={9} cols={64}
                    value={this.state.valueAboutMe}
                    placeholder={this.state.valueAboutMe}
                    onChange={this.handleChangeAboutMe} />
                </label></div></div>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                  <p className='font7'>First Name:</p>
                  <textarea type="textarea" rows={1} cols={64} placeholder='pat' />
                </label></div></div>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                  <p className='font7'>Last Name:</p>
                  <textarea type="textarea" rows={1} cols={64} placeholder='hustad' />
                </label></div></div>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                  <p className='font7'>Location:</p>
                  <textarea type="textarea" rows={1} cols={64} placeholder='Palo Alto' />
                </label></div></div>
                <div className='row'><div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><label>
                  <p className='font7'>Website:</p>
                  <textarea type="textarea" rows={1} cols={64} placeholder='www.pathustad.com' />
                </label></div></div>
              </form>
            </div></div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose} className='blueButton' >Cancel</Button>
            <Button onClick={this.handleCloseSave} className='blueButton' type="submit" value="Submit">Save</Button>
          </Modal.Footer>
        </Modal>

        <div id="spacer" className="row spacerRow"></div>
        <div id="1A" className="row" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
          <div id="1x" className="row">
            <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
            <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: '50px' }} >
              <div className='row profPic'>
                <img id="" className="img-responsive" src={require("../img/patProfile.png")} alt="" />
              </div>
            </div>
            <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
            <div id="col2A" className="col-sm-6 col-md-6 col-lg-6">

              <div id="1B" className="row profBG font8">
                <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <br />
                  <span><namething className='fontName'>{this.state.valueDisplayName}</namething>
                    <editcreatebutton style={{ marginLeft: '5%' }} ><button onClick={this.handleShow} className="profEditBtn">Edit Profile</button>
                      <a href='/create'><button type="submit" className='redCreateBtn'> Create New Story <Glyphicon glyph="glyphicon glyphicon-plus" /></button></a></editcreatebutton>
                  </span>
                </div>
              </div>

              <div id="2B" className="row profBG font8">
                <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <span><h4>Founder at <strong>MY</strong>STORYA</h4></span>
                </div></div>

              <div id="3B" className="row profBG font8">
                <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <span><h4><strong> Hometown: </strong>San Clemente, California</h4></span>
                </div></div>

              <div id="4B" className="row profBG font8">
                <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><span role="img"><h4><strong>Bio:</strong> {this.state.valueAboutMe}</h4></span>
                </div>
              </div>
              <div id="5B" className="row profBG font8">
                <div id="col1E" className="col-sm-12 col-md-12 col-lg-12"><a href="" style={{ color: 'black' }} ><h4><strong>www.pathustad.com</strong></h4></a>
                  <br />
                </div>
              </div>

              {/* <a href="/create"><button type="submit" className="blueButton"> Create New Story <Glyphicon glyph="glyphicon glyphicon-plus"/></button></a> */}
            </div>
          </div> {/* 1x */}
          <div className='row flags' style={{ backgroundColor: 'rgb(245,245,245)' }} >
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href='https://en.wikipedia.org/wiki/United_States'>
                <img id="" className="img-responsive cursorPointer" src={require("../img/flag_usa.png")} alt="" /></a>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href='https://en.wikipedia.org/wiki/Colombia'>
                <img id="" className="img-responsive" src={require("../img/flag_columbia.png")} alt="" /></a>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href=''>
                <img id="" className="img-responsive cursorPointer" src={require("../img/flag_add.png")} alt="" /></a>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row socialBtnRow'>
              {this.renderFollow()}
            </div></div>
        </div>
        
        
      </div>
    );
  }
}

export default ProfileDash;