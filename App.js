import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import { GlobalColor } from './component/Styles';
import IconButton from './Ui/Icon';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColor.Colors.primaryColor },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalColor.Colors.suportColor3 },
        tabBarActiveTintColor: GlobalColor.Colors.supportColor1,

        headerRight:({tintColor})=> <IconButton icon="add" size={25} color={tintColor} onPress={()=>{}}/>

        
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' size={size} color={color} />
          )
        }}

      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',

          tabBarIcon: ({ color, size }) => (
            <Icon name='wallet' size={size} color={color} />
          )
        }}

      />

    </BottomTabs.Navigator>
  )


}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>

        <Stack.Navigator >
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }} />

          <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
        </Stack.Navigator>



      </NavigationContainer>


    </>
  );
}
