import React, { Component } from 'react';

class VideoPlayer extends Component {
  state = {
    currentTime: 0,
    maxTime: 0,
    playing: false,
  }

  videoEl = null;

  componentDidMount = () => {
    this.setState({ maxTime: this.videoEl.duration });
  }

  onClickPlay = () => {
    if (this.videoEl) {
      this.videoEl.play();
    }
    this.setState({ playing: true });
  }

  onClickPause = () => {
    if (this.videoEl) {
      this.videoEl.pause();
    }
    this.setState({ playing: false });
  }

  onVideoTimeUpdate = () => {
    this.setState({
      maxTime: this.videoEl.duration,
      currentTime: this.videoEl.currentTime,
    });
  }

  render() {
    const { playing, currentTime, maxTime } = this.state;
    return (
      <div>
        <video
          ref={(el) => { this.videoEl = el; }}
          onTimeUpdate={this.onVideoTimeUpdate}
          className="video-player"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <button
          type="button"
          onClick={this.onClickPlay}
        >
          Play
        </button>
        <button
          type="button"
          onClick={this.onClickPause}
        >Pause
        </button>
        {playing ? 'Playing' : 'paused'}
        <div>
          {currentTime} / {maxTime}
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
