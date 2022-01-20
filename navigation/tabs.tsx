import React from "react";
// @ts-ignore
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/BottomStack";
import { icons } from "../constants";
import { TabIcon } from "../components/UI";
import Search from "../screens/BottomStack/Search";
import Settings from "../screens/BottomStack/Settings";
import { MainStackParamList } from "../Types";

const Tab = createBottomTabNavigator<MainStackParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "white",
          borderTopColor: "transparent",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
