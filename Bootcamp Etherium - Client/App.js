import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import CreateLoanScreen from './screens/CreateLoanScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen 
          name="First" component={HomeScreen} options={( {navigation}) => ({
            title:"Préstamos",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Crear Préstamo")}>
              <Text>Create Loan</Text>  
              </TouchableOpacity>   
            )
          })} />
        <Stack.Screen name="Crear Préstamo" component={CreateLoanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
