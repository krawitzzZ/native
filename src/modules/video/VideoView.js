import React, {PropTypes} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationState from '../../modules/navigation/NavigationState';

const VideoView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onClosePress() {
    this.props.dispatch(NavigationState.switchTab(1));
  },

  startRecord() {
    this.camera.capture({
      mode: Camera.constants.CaptureMode.video
    })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  },

  stopRecord() {
    this.camera.stopCapture();
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.close}
          onPress={this.onClosePress}
        >
          <Icon name='times' size={40} color='white' />
        </TouchableOpacity>
        <Camera
          ref={(cam) => {this.camera = cam;}}
          captureMode={Camera.constants.CaptureMode.video}
          captureQuality="720p"
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <TouchableOpacity style={styles.capture} onPress={this.startRecord} >
            <Icon name='video-camera' size={40} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.stopRecord} >
            <Icon name='stop' size={40} color='white' />
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingBottom: 30
  },
  capture: {
    marginBottom: 20
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 5,
    zIndex: 10
  }
});

export default VideoView;
