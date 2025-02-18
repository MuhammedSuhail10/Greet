import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const ImageViewer = ({ imgSource, selectedImage, style }) => {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} style={style} />;
};

export default ImageViewer;