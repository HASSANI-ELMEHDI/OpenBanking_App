import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
// Screens
import Home from './screens/Home';

import Transactions from './screens/Transactions';
import Parametres  from './screens/parametres';
import Service from './compenents/Service';
import Send from './compenents/Services/Send';
import Accounts from './screens/Accounts';


//Screen names
const homeName = "Home";
const accountssName = "Accounts";
const transactionsName = "Transactions";
const parametresName = "Paramétres";
const Tab = createBottomTabNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === accountssName) {
              iconName = focused ? 'wallet' : 'wallet-outline';

            } else if (rn === parametresName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (rn === transactionsName) {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }
        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00a4b5',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 3, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={ Home} />
        <Tab.Screen name={accountssName} component={Accounts} />
        <Tab.Screen name={transactionsName} component={Transactions} />
        <Tab.Screen name={parametresName} component={Send} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;