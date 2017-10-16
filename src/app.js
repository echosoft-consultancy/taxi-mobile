import React, {Component} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import MapView from 'react-native-maps';
import {MenuComponent} from "./components/menu/component";

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	menuComponent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	}
});

module.exports = class MyApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: 51.529217,
						longitude: -2.575064,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				>
				</MapView>
				<MenuComponent style={styles.menuComponent}/>
			</View>
		);
	}
};