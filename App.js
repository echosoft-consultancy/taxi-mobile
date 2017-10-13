/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: 400,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

module.exports = class MyApp extends Component {
	render() {
		const { region } = this.props;
		console.log(region);

		return (
			<View style ={styles.container}>
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
			</View>
		);
	}
};