import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViwer from './src/components/imageViewer';
import Button from './src/components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';


const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {

  const [selectedImage, setSelectedImage] = useState()
  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }
    return
  }

  return (
    <View style={styles.container}>
      {showAppOptions ? (
        <View />
      ) : (
        <>
          <View style={styles.imageContainer}>
            <ImageViwer
              placeholderImage={PlaceholderImage}
              selectedImage={selectedImage} />
          </View><View style={styles.footerContainer}>
            <Button label='Choose a photo' theme='primary' onPress={pickImageAsync} />
            <Button label='Use this photo' onPress={() => setShowAppOptions(true)} />
          </View><StatusBar style="auto" />
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
