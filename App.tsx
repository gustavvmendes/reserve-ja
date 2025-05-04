// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ChooseArenaScreen from './screens/ChooseArenaScreen';
import ChooseTimeScreen from './screens/ChooseTimeScreen';
import ConfirmReservationScreen from './screens/ConfirmReservationScreen';
import ConfirmedReservationScreen from './screens/ConfirmedReservationScreen';
import EditReservationScreen from './screens/EditReservationScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


// Defina os nomes de rota e parâmetros (nenhum neste exemplo)
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ChooseArena: undefined;
  EditReservation: undefined;
  ConfirmReservation: undefined;
  ConfirmedReservation: undefined;
  ChooseTime: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="ChooseArena" component={ChooseArenaScreen}/>
        <Stack.Screen name="EditReservation" component={EditReservationScreen}/>
        <Stack.Screen name="ConfirmReservation" component={ConfirmReservationScreen}/>
        <Stack.Screen name="ConfirmedReservation" component={ConfirmedReservationScreen}/>
        <Stack.Screen name="ChooseTime" component={ChooseTimeScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
