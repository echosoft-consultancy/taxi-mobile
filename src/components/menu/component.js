import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from "react-native-action-button";
import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";

export class MenuComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
      hailTaxi: props.hailTaxi
     };
	}

	render() {
		return (
			<View style={styles.actionMenuButton}>
			<ActionButton buttonColor="#ea1f11" hideShadow={true}>
				<ActionButton.Item buttonColor='#9b59b6' title="Hail Taxi" textContainerStyle={styles.actionButtonIconText} onPress={this.state.hailTaxi}>
					<Icon name="cab" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor='#3498db' title="Notifications" textContainerStyle={styles.actionButtonIconText} onPress={() => {}}>
					<Icon name="bell-o" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor='#1abc9c' title="Friends" textContainerStyle={styles.actionButtonIconText} onPress={() => {}}>
					<Icon name="user-o" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor="#9c8d79" title="Settings" textContainerStyle={styles.actionButtonIconText} onPress={() => {}}>
					<Icon name="gear" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 15,
		height: 20,
		color: 'white',
		opacity: 0.75
	},
	actionMenuButton: {
		flex: 1,
		width: 200,
		flexDirection: 'row',
		alignSelf: 'flex-end'
	},
	actionButtonIconText: {
		opacity: 0.7
	}
});
