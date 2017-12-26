
import { Navigation ,} from 'react-native-navigation';

import Home from './home/index'
import Admin from './admin/index'
export function registerScreens() {


  Navigation.registerComponent('home', () => Home);
  Navigation.registerComponent('admin', () => Admin);
  
 
}




