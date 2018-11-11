import { StackNavigator } from 'react-navigation'
import ProfileScreen from '../Containers/ProfileScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProfileScreen: { screen: ProfileScreen },
  RegistrationScreen: { screen: RegistrationScreen },
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
