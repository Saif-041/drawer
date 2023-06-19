import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../src/Feed'
import Article from '../src/Article';
import Account from '../src/Account';
import Profile from '../src/Profile';
import Setting from '../src/Setting';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Feed'>
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


