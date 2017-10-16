import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export class MenuComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.circleButton}>
					<Icon name="bars" size={30}/>
				</TouchableOpacity>
			</View>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		height: 75,
		width: 75,
		marginBottom: 15,
		marginRight: 15,
		alignSelf: 'flex-end'
	},
	circleButton: {
		opacity: 0.9,
		height: 75,
		width: 75,
		borderRadius: 75/2,
		backgroundColor: '#9c8d79',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
