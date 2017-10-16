import React, {Component} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import {MenuComponent} from "./components/menu/component";
import {MapComponent} from "./components/map/component";

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	}
});

module.exports = class MyApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MapComponent/>
				<MenuComponent/>
			</View>
		);
	}
};