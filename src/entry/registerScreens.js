
import { Navigation ,} from 'react-native-navigation';
import App from '../../App'
import Home from '../Pages/home/js/LottieAnimatedExample'
import Admin from '../Pages/admin'
export function registerScreens() {
  Navigation.registerComponent('app', () => App);

  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Admin', () => Admin);
 
}




