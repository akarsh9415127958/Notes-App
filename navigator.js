import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp';

const stackNavigatorOptions = {
    headerShown: false,
  };
  const AppNavigator = createStackNavigator(
    {
LoginScreen:{screen:LoginScreen},
SignUp:{screen:SignUp},

    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
      }
    )
    export default createAppContainer(AppNavigator);