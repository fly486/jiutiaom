

const {Navigation} = require('react-native-navigation');
const Icon = require('react-native-vector-icons/Ionicons');
import { registerScreens } from './registerScreens';


registerScreens();




let homeIcon;
let homeOutlineIcon;
let planetIcon;
let planetOutlineIcon;
let cartIcon;
let cartOutlineIcon;
let userIcon;
let userOutlineIcon;

class App {
  constructor() {

    this._populateIcons().then(() => {
      // Start app only if all icons are loaded

      {this.startApp()}

    }).catch((error) => {
      console.error(error);
    });
  }

  _populateIcons = function () {

    return new Promise(function (resolve, reject) {
      Promise.all(
        [

          Icon.getImageSource('ios-home', 30),
          Icon.getImageSource('ios-home-outline', 30),

          Icon.getImageSource('ios-planet', 30),
          Icon.getImageSource('ios-planet-outline', 30),

          Icon.getImageSource('ios-cart-outline', 30),
          Icon.getImageSource('ios-cart', 30),

          Icon.getImageSource('ios-contact-outline', 30),
          Icon.getImageSource('ios-contact', 30),
        ]
      ).then((values) => {

        homeIcon = values[0];
        homeOutlineIcon = values[1];
        planetIcon = values[2];
        planetOutlineIcon = values[3];
        cartIcon = values[4];
        cartOutlineIcon = values[5]
        userIcon = values[6];
        userOutlineIcon = values[7];




        resolve(true);
      }).catch((error) => {
        console.log(error);
        reject(error);
      }).done();
    });
  };
  startApp() {
    // this will start our app


    Navigation.startTabBasedApp({
      tabs: [
        {
          label: '首页',
          screen: 'home',
          icon: homeOutlineIcon,
          selectedIcon: homeIcon,
          title: '首页',
          navigatorStyle: {},
        },

        {
          label: '发现',
          screen: 'home',
          icon: planetOutlineIcon,
          selectedIcon: planetIcon,
          title: '发现',
          navigatorStyle: {
          },
        },

         {
         label: '购物车',
         screen: 'admin',
         icon: cartIcon,
         selectedIcon: cartOutlineIcon,
         title: '购物车',
         navigatorStyle: {},
         },

        {
          label: '我的',
          screen: 'admin',
          icon: userIcon,
          selectedIcon: userOutlineIcon,
          title: '我的',
          navigatorStyle: {},
        },

      ],
      tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
        //tabBarBackgroundColor: '#0f2362',
        //tabBarButtonColor: '#ffffff',
        tabBarSelectedButtonColor: 'rgb(30, 144, 255)',

      },

      appStyle: {
        keepStyleAcrossPush: false //防止全部一个颜色
      },
      passProps :{}
    });
  }
}

export default App