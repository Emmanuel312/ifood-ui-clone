import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Store from "../components/Store";
import Items from "../components/Items";

const Tabs = createMaterialTopTabNavigator();

function Routes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "#ccc",
        indicatorStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tabs.Screen component={Store} name="Lojas" />
      <Tabs.Screen component={Items} name="Itens" />
    </Tabs.Navigator>
  );
}

export default Routes;
