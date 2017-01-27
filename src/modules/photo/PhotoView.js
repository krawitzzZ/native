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

const PhotoView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onClosePress() {
    this.props.dispatch(NavigationState.switchTab(1));
  },

  startRecord() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        setTimeout(this.onClosePress, 150);
      })
      .catch(err => console.error(err));
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
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <TouchableOpacity onPress={this.startRecord} >
            <Icon name='photo' size={35} color='white' />
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
  close: {
    position: 'absolute',
    top: 0,
    right: 5,
    zIndex: 10
  }
});

export default PhotoView;
