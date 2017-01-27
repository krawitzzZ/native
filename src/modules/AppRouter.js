/*eslint-disable react/prop-types*/

import React from 'react';
import HomeViewContainer from './home/HomeViewContainer';
import PhotoViewContainer from './photo/PhotoViewContainer';
import VideoViewContainer from './video/VideoViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key.startsWith('Home')) {
    const index = props.scenes.indexOf(props.scene);
    return <HomeViewContainer index={index} />;
  }

  if (key === 'Video') {
    return <VideoViewContainer />;
  }

  if (key === 'Photo') {
    return <PhotoViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
