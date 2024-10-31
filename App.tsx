import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProviderTotal } from './data/store';
import clrStyle from './assets/componentStyleSheet';
import { ColorValue } from 'react-native';

// screen import
import Onboard from './screens/Onboard';
import DataCollect from './screens/DataCollect';
import Login from './screens/Login';
import BottomTab from './assets/BottomTab';
import Home from './screens/Home';
import CatePage from './screens/CatePage';
import FormularPage from './screens/FormularPage';
import User from './screens/User';
// >>>>>>>>>>
import BlogView from './screens/BlogView';
import CreateRecipe from './screens/CreateRecipe';
import ItemView from './screens/ItemView';
// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: clrStyle.white as ColorValue } }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DataCollect" component={DataCollect} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CatePage" component={CatePage} />
          <Stack.Screen name="FormularPage" component={FormularPage} />
          <Stack.Screen name="User" component={User} />
          {/* >>>> */}
          <Stack.Screen name="BlogView" component={BlogView} />
          <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
          <Stack.Screen name="ItemView" component={ItemView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;