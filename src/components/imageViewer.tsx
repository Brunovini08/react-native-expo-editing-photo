import React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface IProps {
    placeholderImage: ImageSourcePropType;
    selectedImage: any;
}

export default function ImageViwer({ placeholderImage, selectedImage }: IProps) {
    const imageSource = selectedImage ? { uri: selectedImage} : placeholderImage
    
    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})