import {SettingsComponent} from "./components/menu/settings/component";
import { AppRegistry } from 'react-native';
import {MainComponent} from "./app";
import {StackNavigator} from "react-navigation";

export const App = StackNavigator({
	Home: { screen: MainComponent },
	Settings: {screen: SettingsComponent}
});

AppRegistry.registerComponent('taxi_mobile', () => App);
