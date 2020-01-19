import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main({ navigation}) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) return null;

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker
        coordinate={{ latitude: -15.8294016, longitude: -47.9731712 }}
      >
				<Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/8206586?v=4'}} />
				<Callout onPress={() => navigation.navigate('Profile', {
					github_username: 'paulobontempo',
				})}>
					<View style={styles.callout}>
						<Text style={styles.devName}>Paulo Bontempo</Text>
						<Text style={styles.devBio}>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
						<Text style={styles.devTechs}>JAVA, PHP, NodeJS</Text>
					</View>
				</Callout>
			</Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
	},
	avatar: {
		width: 54,
		height: 54,
		borderRadius: 4,
		borderWidth: 4,
		borderColor: '#FFF',
	},
	callout: {
		width: 260,
	},
	devName: {
		fontWeight: "bold",
		fontSize: 16,
	},
	devBio: {
		color: '#666',
		marginTop: 5,
	},
	devTechs: {
		marginTop: 5,
	}
});

export default Main;
