import React, { Component } from 'react';

class ProfileVideos extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row' style={{marginBottom: '1%', marginTop: '1%'}}>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 ' style={{background: 'lightgrey' }}>
                        <div className=' videoRow'>
                            <div className='row  videoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/qJ5IbQk7Hys" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/isAHvHxGLVA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https:/www.youtube.com/embed/h8IuFl3sMhk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className='row  videoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fxycFCRBOMk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nn3YTXat2DA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/7f-K-XnHi9I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className='row  videoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1_azHA9quYg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/x7qPAY9JqE4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4  videoColumn'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/x7qPAY9JqE4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ProfileVideos;