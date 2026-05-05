import * as Location from "expo-location";
import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, {
  Marker,
  Region,
  UrlTile,
  MapPressEvent,
} from "react-native-maps";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const { height } = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [markerPosition, setMarkerPosition] = useState<Coordinates | null>(
    null,
  );

  const getLocation = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission denied! Please allow location access.");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    const coords: Coordinates = {
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    };

    setLocation(coords);
    setMarkerPosition(coords);
  };

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  const handleMarkerDragEnd = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  const region: Region | undefined = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

  return (
    <View style={styles.container}>
      {!location ? (
        <View style={styles.center}>
          <Button title="Get Geo Location" onPress={getLocation} />
        </View>
      ) : (
        <>
          <MapView
            style={styles.map}
            initialRegion={region}
            onPress={handleMapPress}
          >
            {markerPosition && (
              <Marker
                coordinate={markerPosition}
                title="My Location"
                draggable
                onDragEnd={handleMarkerDragEnd}
              />
            )}
          </MapView>

          <View style={styles.info}>
            <Text style={styles.label}>📍 Marker Position</Text>
            <Text>Latitude: {markerPosition?.latitude.toFixed(6)}</Text>
            <Text>Longitude: {markerPosition?.longitude.toFixed(6)}</Text>
            <View style={{ marginTop: 12 }}>
              <Button title="Refresh Location" onPress={getLocation} />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    height: height * 0.6,
    width: "100%",
  },
  info: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
});
