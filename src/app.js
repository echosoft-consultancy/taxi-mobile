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

	setLocation(location) {
		console.log('setting location')
		this.setState({location: location})
	}

	hailTaxi() {
		console.log('hailing taxi')
		console.log(`location: ${JSON.stringify(this.state.location)}`)
	}

	render() {
		return (
			<View style={styles.container}>
				<MapComponent setLocation={this.setLocation.bind(this)}/>
				<MenuComponent hailTaxi={this.hailTaxi.bind(this)}/>
			</View>
		);
	}
};
