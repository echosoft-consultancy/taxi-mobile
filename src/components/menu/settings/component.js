import React, {Component} from 'react';
import {Switch, View, StyleSheet, Text, TouchableOpacity} from "react-native";

export class SettingsComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			driverModeEnabled: false
		}
	}

	render() {
		return (
			<View style={styles.settings}>
				<View style={styles.driverSettings}>
					<Text style={styles.driverSettingsText}>Driver Mode</Text>
					<Switch onValueChange={(value) => this.setState({driverModeEnabled: value})} value={this.state.driverModeEnabled}>
					</Switch>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	settings: {
		flex: 1,
		flexDirection: 'column',
	},
	driverSettings: {
		paddingTop: 10,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	driverSettingsText: {
		paddingRight: 10,
		fontSize: 14,

	}
});