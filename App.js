import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Platform, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Constants } from 'expo-constants';

export default function App() {
  const [image, setImage] = useState("https://via.placeholder.com/200");
  useEffect( async ()=>{
    if (Platform.OS !== 'web') {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permisson denied!')
      }
    }
  },[]);

  const PickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    })
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Button title='Choose Image' onPress={PickImage}/>
      {image && <Image source={{uri: image}} style={{width:200 , height: 200}}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
