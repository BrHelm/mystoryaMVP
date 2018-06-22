import React from 'react';

export default () => {
  return <footer className='mt-5 p-4'>
      <div style={{marginTop: '1%'}}>
        <div className="row font7 text-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span>
              <a href="/">
                <lang className="lang">English(US)</lang>
              </a>
              <a href="/">
                <lang className="lang">Español </lang>
              </a>
              <a href="/">
                <lang className="lang">Português(Brasil) </lang>
              </a>
              <a href="/">
                <lang className="lang">Français(France) </lang>
              </a>
              <a href="/">
                <lang className="lang">Deutsch </lang>
              </a>
              <a href="/">
                <lang className="lang">Italiano </lang>
              </a>
              <a href="/">
                <lang className="lang">עִברִית</lang>
              </a>
              <a href="/">
                <lang className="lang">אֲרָמִית</lang>
              </a>
              <a href="/">
                <lang className="lang">普通话 </lang>
              </a>
              <a href="/">
                <lang className="lang">日本語 </lang>
              </a>
            </span>
          </div>
        </div>
      <div className="row" style={{ borderBottom: "3px solid darkgrey", marginTop: '1%', marginBottom: '1%' }} />
        <div className="row font7 text-center">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <span>
              <a href="/">
                <inform className="inform">Privacy </inform>
              </a>
              <a href="/">
                <inform className="inform">Terms </inform>
              </a>
              <a href="/">
                <inform className="inform">About us </inform>
              </a>
              <a href="/">
                <inform className="inform">Careers </inform>
              </a>
              <a href="/">
                <inform className="inform">Langauges </inform>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="text-center" style={{marginTop: '1%'}}>
        {" "}
        Copyright &copy; {new Date().getFullYear()} Mystorya{" "}
      </div>
      
    </footer>;
};

{
  /* <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Mystorya
    </footer> */
}
{/* <div className="container">
      <div className="row" style={{ borderTop: "3px solid darkgrey", marginBottom: "1%" }}>
        <div id="1A" className="row font7" style={{ marginTop: "1%" }}>
          <div id="col1A" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents">
            <span className="cursorPointer">Privacy</span>
          </div>
          <div id="col1A" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents">
            <span className="cursorPointer">Terms</span>
          </div>
          <div id="col1A" className="col-xs-1 col-sm-1 col-md-1 col-lg-1 centerContents" />
          <div id="col1A" className="col-xs-3 col-sm-3 col-md-3 col-lg-3 centerContents">
            <span className="cursorPointer">About Us</span>
          </div>

          <div id="col1A" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents">
            <span className="cursorPointer">Careers</span>
          </div>
          <div id="col1A" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 centerContents">
            <span className="cursorPointer">Langauges</span>
          </div>
        </div>
        <div id="2A" className="row" style={{ marginTop: "10px" }}>
          <div id="col2A" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 centerContents">
            <img alt="" className="footerLogoBlue" src={require("../../img/logoBlackFooter.png")} />
          </div>
        </div>
        <div id="3A" className="row font7 centerContents">
            <span className='copyrightText'><img alt='' className="copyright img-responsive" src={require("../../img/copyright.png")} />2018 MYSTORYA</span>
          </div>
      </div>
    </div> */}