import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

class Profile extends Component {
    render() {
        return (
            <div>
                <h3><i>Supported audio formats: MP3, WAV, and OGG</i></h3>

                <p>Green Day - Boulevard of broken dreams </p>
                <ReactAudioPlayer
                    src="https://data51.chiasenhac.com/downloads/1007/4/1006303-a3d499cf/320/Boulevard%20Of%20Broken%20Dreams%20-%20Green%20Day.mp3"
                    autoPlay
                    controls
                    controlsList='nodownload'
                />
                <br />
                <br />
                <br />

                <p>The Corrs - Toss the feathers </p>
                <ReactAudioPlayer style={{ width: '25%' }}
                    src="https://data54.chiasenhac.com/downloads/1107/4/1106808-e298a9f1/320/Toss%20The%20Feathers%20-%20The%20Corrs.mp3"
                    autoPlay={false}
                    controls
                    controlsList='nodownload'
                /><div> Autoplay set to false</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return state };

export default connect(
    mapStateToProps
)(Profile)
