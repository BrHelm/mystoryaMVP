import React, { Component } from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';
import ProfileBio from "./ProfileBio";
import ProfileActions2 from '../dashboard/ProfileActions2';
import ProfileContent from './content/ProfileContent';

class ProfileUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDismissFollow = this.handleDismissFollow.bind(this);
    this.handleShowFollow = this.handleShowFollow.bind(this);

    this.state = { show: false, showFollow: true };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
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
        If you hide your followers, no one will be able to see how many
        followers you have or who you're following.
      </Popover>
    );

    if (this.state.showFollow) {
      return (
        <div className="container-fluid">
          <div
            className="row socialBtnRow"
            style={{ backgroundColor: "rgb(75,75,75)" }}
          >
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">
                1,111 Following{" "}
              </button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">2,222 followers</button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent">
              <button className="whiteBtnSoc socialBtn">3,333 stories</button>
            </div>
          </div>
          <div>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="bottom"
              overlay={popoverHoverFocus}
            >
              <Button
                className="hideFollowBtn"
                onClick={this.handleDismissFollow}
              >
                {" "}
                hide{" "}
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div
          className="row socialBtnRow"
          style={{ backgroundColor: "rgb(75,75,75)" }}
        >
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 centerContent" />
        </div>
        <div>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="bottom"
            overlay={popoverHoverFocus}
          >
            <Button onClick={this.handleShowFollow} className="hideFollowBtn">
              {" "}
              show{" "}
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
  render() {
    const { profile } = this.props;

    return (
      <div className="container-fluid">
        <div
          id="1A"
          className="row"
          style={{ backgroundColor: "rgb(240,240,240)" }}
        >
          <div id="1x" className="row">
            <div id="col1A" className="col-sm-1 col-md-1 col-lg-1" />
            <div
              id="col2A"
              className="col-sm-4 col-md-4 col-lg-4 "
              style={{ marginTop: "1%" }}
            >
              <img className="square" src={profile.user.avatar} alt="" />
              <div className="row">
                <div className="col-md-7">
                  <a href="https://en.wikipedia.org/wiki/United_States">
                    <img
                      className="img-responsive cursorPointer"
                      style={{ marginTop: "1%", marginBottom: '1%' }}
                      src={require("../../img/flag_usa.png")}
                      id=""
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div id="col4A" className="col-sm-6 col-md-6 col-lg-6">
              <div id="1B" className="row profBG">
                <namething className="fontName">
                  {/* {profile.user.name} */}
                  {profile.handle}
                </namething>
                <ProfileActions2 />
              </div>

              <div id="2B" className="row profBG font8">
                <p className="lead text-center">
                  {profile.status}{" "}
                  {isEmpty(profile.company) ? null : (
                    <span>at {profile.company}</span>
                  )}
                </p>
              </div>

              <div id="3B" className="row profBG font8">
                {isEmpty(profile.location) ? null : <p>Hometown: {profile.location}</p>}
              </div>

              <div id="4B" className="row profBG font8">
                <div id="col1D" className="col-sm-12 col-md-12 col-lg-12">
                  <span role="img">
                    <h4>
                      <ProfileBio profile={profile} />
                    </h4>
                  </span>
                </div>
              </div>
              <div id="5B" className="row profBG font8">
                <p>
                  {isEmpty(profile.website) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.website}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fas fa-globe fa-2x"
                      />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.twitter) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.twitter}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fab fa-twitter fa-2x"
                      />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.facebook) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.facebook}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fab fa-facebook fa-2x"
                      />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.linkedin) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.linkedin}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fab fa-linkedin fa-2x"
                      />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.youtube) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.youtube}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fab fa-youtube fa-2x"
                      />
                    </a>
                  )}

                  {isEmpty(
                    profile.social && profile.social.instagram
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.instagram}
                      target="_blank"
                    >
                      <i
                        style={{ color: "black" }}
                        className="fab fa-instagram fa-2x"
                      />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>

          {this.renderFollow()}
        </div>

        <ProfileContent />
  
      </div>
    );
  }
}

export default ProfileUser;
