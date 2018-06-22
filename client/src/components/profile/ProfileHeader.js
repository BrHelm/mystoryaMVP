import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { Button, Modal } from "react-bootstrap";
import ProfileAbout from "./ProfileAbout";

class ProfileHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { profile } = this.props;

    return <div className="container-fluid">
        <Modal bsSize="md" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="font3">Follow/Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">Coming Soon...</div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose} className="blueButton">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div id="spacer" className="row spacerRow" />
      <div id="1A" className="row" style={{ backgroundColor: "rgb(202,202,202)" }}>
          <div id="1x" className="row">
            <div id="col1A" className="col-sm-1 col-md-1 col-lg-1" />
            <div id="col2A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: "1%" }}>
              
                <img className="square" src={profile.user.avatar} alt="" />
              
            </div>
            
            <div id="col4A" className="col-sm-6 col-md-6 col-lg-6">
              <div id="1B" className="row profBG font8">
                
                  <br />
                  <viewdiv>
                    <namething className="fontName">
                      {/* {profile.user.name} */}
                      {profile.handle}
                    </namething>
                    <Button style={{ marginLeft: "15%" }} onClick={this.handleShow} className="profEditBtn">
                      Follow
                    </Button>
                    <Button style={{ marginLeft: "3%" }} onClick={this.handleShow} className="profEditBtn">
                      Message
                    </Button>
                  </viewdiv>
                
              </div>

              <div id="2B" className="row profBG font8">
                <p className="lead text-center">
                  {profile.status} {isEmpty(profile.company) ? null : <span>
                      at {profile.company}
                    </span>}
                </p>
              </div>

              <div id="3B" className="row profBG font8">
                {isEmpty(profile.location) ? null : <p>
                    {profile.location}
                  </p>}
              </div>

              <div id="4B" className="row profBG font8">
                <div id="col1D" className="col-sm-12 col-md-12 col-lg-12">
                  <span role="img">
                    <h4>
                      <ProfileAbout profile={profile} />
                    </h4>
                  </span>
                </div>
              </div>
              <div id="5B" className="row profBG font8">
              <p>
                {isEmpty(profile.website) ? null : <a className="text-white p-2" href={profile.website} target="_blank">
                  <i className="fas fa-globe fa-2x" />
                </a>}

                {isEmpty(profile.social && profile.social.twitter) ? null : <a className="text-white p-2" href={profile.social.twitter} target="_blank">
                  <i className="fab fa-twitter fa-2x" />
                </a>}

                {isEmpty(profile.social && profile.social.facebook) ? null : <a className="text-white p-2" href={profile.social.facebook} target="_blank">
                  <i className="fab fa-facebook fa-2x" />
                </a>}

                {isEmpty(profile.social && profile.social.linkedin) ? null : <a className="text-white p-2" href={profile.social.linkedin} target="_blank">
                  <i className="fab fa-linkedin fa-2x" />
                </a>}

                {isEmpty(profile.social && profile.social.youtube) ? null : <a className="text-white p-2" href={profile.social.youtube} target="_blank">
                  <i className="fab fa-youtube fa-2x" />
                </a>}

                {isEmpty(profile.social && profile.social.instagram) ? null : <a className="text-white p-2" href={profile.social.instagram} target="_blank">
                  <i className="fab fa-instagram fa-2x" />
                </a>}
              </p>
              </div>
            </div>
          </div>

          <div className="row flags" style={{margin: '1%'}}>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href="https://en.wikipedia.org/wiki/United_States">
                <img id="" className="img-responsive cursorPointer" src={require("../../img/flag_usa.png")} alt="" />
              </a>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          </div>
          <div className="container-fluid">
            <div className="row socialBtnRow" style={{ backgroundColor: "rgb(245,245,245)" }}>
              
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
          </div>
        </div>

        <div className="row">bookshelves featuring above user stories</div>

        
      </div>;
  }
}

export default ProfileHeader;

/* class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="square"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
 */