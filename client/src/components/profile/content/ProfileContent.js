import React, { Component } from 'react';
import ProfilePhotos from './ProfilePhotos';
import ProfileVideos from './ProfileVideos';
import ProfileNewsfeed from './ProfileNewsfeed';
import ProfileFriendsFamily from './ProfileFriendsFamily';


class ProfileContent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSwitchPhotos = this.handleSwitchPhotos.bind(this);
        this.handleSwitchVideos = this.handleSwitchVideos.bind(this);
        this.handleSwitchStories = this.handleSwitchStories.bind(this);
        this.handleSwitchNewsfeed = this.handleSwitchNewsfeed.bind(this);
        this.handleSwitchFriendsFamily = this.handleSwitchFriendsFamily.bind(this);
        
        this.state = {
            showFollow: 'stories'
        };
    }
        
    handleSwitchStories() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'stories' });
    }
    handleSwitchPhotos() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'photos' });
    }
    handleSwitchVideos() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'videos' });
    }
    handleSwitchNewsfeed() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'newsfeed' });
    }
    handleSwitchFriendsFamily() {
        if (window.scrollY < 545){window.scrollTo(0, 550)};
        this.setState({ showFollow: 'friendsfamily' });
    }

    renderSwitch() {
        if (this.state.showFollow === 'stories') {
            return (
                    <div className="row">
                    bookshelf
                    </div>
            );
        }
        if (this.state.showFollow === 'photos') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfilePhotos />
                    </div></div>
            );
        }
        if (this.state.showFollow === 'videos') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileVideos />
                    </div></div>
            );
        }
        if (this.state.showFollow === 'newsfeed') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileNewsfeed />
                </div></div>
            );
        }
        if (this.state.showFollow === 'friendsfamily') {
            return (
                <div className='row'>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ProfileFriendsFamily />
                </div></div>
            );
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row centerContent'>
                    
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        
                        <button className='profBtn' onClick={this.handleSwitchStories} autofocus="autofocus" > My Stories </button>

                        <button className='profBtn' onClick={this.handleSwitchPhotos} > My Photos </button>

                        <button className='profBtn' onClick={this.handleSwitchVideos} > My Videos </button>

                        <button className='profBtn' onClick={this.handleSwitchNewsfeed} > Newsfeed </button>

                    </div>
                    
                </div>
                {this.renderSwitch()}
                
            </div>
        );
    }

}

export default ProfileContent;
