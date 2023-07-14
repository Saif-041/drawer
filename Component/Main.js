import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../src/Feed'
import Account from '../src/Account';
import Royal from '../src/Royal';
import Setting from '../src/Setting';
import GFC from '../src/GFC';
import SK from '../src/SK';
import Hino from '../src/Hino';
import Sufi from '../src/Sufi';
import SuperAsia from '../src/SuperAsia';
import Canon from '../src/Canon';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Royal'>
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Royal" component={Royal} />
        <Drawer.Screen name="GFC" component={GFC} />
        <Drawer.Screen name="SK" component={SK} />
        <Drawer.Screen name="Hino" component={Hino} />
        <Drawer.Screen name="Sufi" component={Sufi} />
        <Drawer.Screen name="Super Asia" component={SuperAsia} />
        <Drawer.Screen name="Canon" component={Canon} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


