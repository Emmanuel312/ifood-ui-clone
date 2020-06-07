import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Store from "../components/Store";
import Items from "../components/Items";

import Main from "../pages/Main";
const Bottom = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Bottom.Navigator>
        <Bottom.Screen component={Main} name="Main" />
        <Bottom.Screen component={Store} name="Store" />
        <Bottom.Screen component={Items} name="Items" />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
