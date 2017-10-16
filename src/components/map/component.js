import React, {Component} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	}
});

export class MapComponent extends Component {



	constructor() {
		super();
		this.state = {
			latitude: null,
			longitude: null
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				>
				</MapView>
			</View>
		);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((pos) => {
			this.setState({
				latitude: pos.coords.latitude,
				longitude: pos.coords.longitude
			});
		});
	}
}