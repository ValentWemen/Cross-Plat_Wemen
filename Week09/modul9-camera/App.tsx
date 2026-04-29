import { Text, View, Button, Image, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { File, Paths } from "expo-file-system/next";

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required", "Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (!image) {
      Alert.alert("No Image", "Please take or pick an image first!");
      return;
    }

    try {
      const source = new File(image);
      const destination = new File(Paths.document, `saved_${Date.now()}.jpg`);
      source.copy(destination);

      Alert.alert("Success!", `Image saved! 🎉\n${destination.uri}`);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valent Joseph Setiawan - 00000075506</Text>

      <View style={styles.button}>
        <Button title="OPEN CAMERA" onPress={openCamera} />
      </View>

      <View style={styles.button}>
        <Button title="OPEN GALLERY" onPress={openGallery} />
      </View>

      {image && (
        <View style={styles.button}>
          <Button title="SAVE IMAGE" onPress={saveImage} color="green" />
        </View>
      )}

      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 10,
  },
  button: {
    marginVertical: 5,
    width: 150,
  },
  image: {
    width: 250,
    height: 200,
    marginTop: 20,
  },
});
