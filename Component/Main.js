import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../src/Feed'
import Article from '../src/Article';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Feed'>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


