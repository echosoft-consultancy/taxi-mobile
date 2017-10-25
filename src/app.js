import React, {Component} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import {MenuComponent} from "./components/menu/component";
import {MapComponent} from "./components/map/component";
import axios from 'axios';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	}
});

export class MainComponent extends Component {

	setLocation(location) {
		console.log('setting location')
		this.setState({location: location})
	}

	hailTaxi() {
		console.log('hailing taxi')
		axios.post('http://192.168.86.152:4567/passenger/ride', {
			lat: this.state.location.latitude,
			lon: this.state.location.longitude
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<MapComponent setLocation={this.setLocation.bind(this)}/>
				<MenuComponent hailTaxi={this.hailTaxi.bind(this)} navigation={this.props.navigation}/>
			</View>
		);
	}
}
