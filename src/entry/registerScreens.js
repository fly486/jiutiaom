/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 17/3/19 上午2:02
 */
/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 17/3/18 上午2:35
 */
import { Navigation ,} from 'react-native-navigation';
import App from '../../App'

export function registerScreens() {
  Navigation.registerComponent('app', () => App);

 // Navigation.registerComponent('list', () => L);
 // Navigation.registerComponent('l', () => L);
}




