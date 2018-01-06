
import { Navigation ,} from 'react-native-navigation';

import Home from './home/index'
import Admin from './find'
import Find from './login/App'
export function registerScreens(store,Provider) {


  Navigation.registerComponent('home', () => Home ,store,Provider);
  Navigation.registerComponent('admin', () => Admin,store,Provider);
  Navigation.registerComponent('find', () => Find,store,Provider);
}




